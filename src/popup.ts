import { parse } from 'papaparse'
import { buildInsertRowsRequest, buildInsertDataRequest, buildAutoFillRequest } from "./sheets"
import * as H from './helpers'
import { initializeGAPI } from './authentication'
import { settingsFromStorage } from './storage'
import { addOption } from './ui'

const inputFile: HTMLInputElement = <HTMLInputElement>document.getElementById('inputFile')!
const inSettingsProfile: HTMLSelectElement = <HTMLSelectElement>document.getElementById('settingsProfile')!
const statusElem = document.getElementById('status')!
const importForm: HTMLFormElement = <HTMLFormElement>document.getElementById('importForm')!

const setStatus = (status: string) => {
    statusElem.innerText = status
}

// runs when DOM is loaded
(() => {
    initializeGAPI(() => {
        console.log('gapi initialized and token retrieved')
        document.querySelectorAll('[disabled]').forEach((elem) => (<HTMLInputElement>elem).disabled = false)
    }, (error) => {
        console.log('error', error)
        setStatus('Not authorized, go to options page to authorize this app')
        showConfigureButton()
    })
    settingsFromStorage((settings) => {
        Object.keys(settings.profiles).forEach(key => {
            addOption(inSettingsProfile, key, settings.profiles[key])
        });
    })
})()

const showConfigureButton = () => {
    let btn = document.createElement('button')
    btn.innerText = '➡ Configure in options ⚙️'
    btn.className = 'pure-button button-warning'
    btn.addEventListener('click', H.goToOptions)
    statusElem.parentNode?.append(btn)
}

/**
 * This function corrects the columns from a matrix where the first row are the headers of the data.
 * it makes sure the desired headers will be left over in the end with the corresponding data from the original matrix
 * @param correctHeaders A list of string representing the header in the desired way
 * @param data The matrix of data where the first row are headings (incorrect headings!)
 */
const switchColumns = (
    correctHeaders: string[], // the correct order of columns
    data: string[][] // the matrix of data retrieved from CSV
) => {
    const CSVheaders = data.shift() // get the columns from the data (these are not in correct order yet!)
    const rowCount = data.length
    data = H.transpose(data) // transpose so its easier to work with the matrix data

    console.log(data)

    let corrData: string[][] = [] // prepare our correct matrix (this will store the data with correct columns)
    correctHeaders.forEach((header: string) => { // loop through the correct columns
        console.log(header, CSVheaders?.includes(header))
        if (CSVheaders?.includes(header)) {
            // if header exists get the rows corresponding to this header and add it to the correct matrix
            corrData.push(data[H.getKey(CSVheaders, header)])
        } else {
            corrData.push(new Array(rowCount).fill("")) // add empty array when header doesn't exist
            // this is done so that the desired length is kept while going trough the desired headings
        }
    });
    console.log(corrData)
    // transpose back into original state
    corrData = H.transpose(corrData)
    console.log(corrData)
    return corrData
}

const importRowsToSheets = (
    file: File,
    spreadsheetId: string,
    sheetId: number,
    columnOrder: string[],
    doAutoFill: boolean
) => {
    console.debug('do autofill?', doAutoFill)
    parse(file, {
        complete: async (results) => {
            let data: any[] = results.data
            console.log(data)
            H.cleanData(data)
            console.log(data)
            data = switchColumns(columnOrder, data)

            let batchUpdateRequest: gapi.client.sheets.BatchUpdateSpreadsheetRequest = {
                requests: [
                    { insertDimension: buildInsertRowsRequest(sheetId, data.length) }, // create empty rows
                ]
            }

            if (doAutoFill) {
                batchUpdateRequest.requests = batchUpdateRequest.requests?.concat([
                    { autoFill: buildAutoFillRequest(sheetId, data.length, 8) }, // category item column (I)
                    { autoFill: buildAutoFillRequest(sheetId, data.length, 13) }, // disabled column (N)
                ])
            }

            console.debug(doAutoFill, batchUpdateRequest)
            
            gapi.client.sheets.spreadsheets.batchUpdate({spreadsheetId}, batchUpdateRequest)
            .then((response) => gapi.client.sheets.spreadsheets.values.update(
                buildInsertDataRequest(spreadsheetId, data)
            )).then((response) => {
                console.debug(response.result)
                const { updatedRows, updatedColumns, updatedCells } = response.result
                setStatus(`rows: ${updatedRows}, cols: ${updatedColumns} added and ${updatedCells} cells updated.`)
            })
        },
        error: (error) => {
            console.log(error)
            setStatus(error.message)
        }
    })
}

importForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputFile.files == null) {
        return;
    }
    let file = inputFile.files[0]
    settingsFromStorage((settings) => {
        let selectedProfile = inSettingsProfile.options.item(inSettingsProfile.selectedIndex)
        if (!(selectedProfile && selectedProfile.innerText in settings.profiles)) {
            setStatus('Profile does not exist!')
            return
        }
        let columnOrder: string[] = settings.profiles[selectedProfile.innerText]
            .split(',')
            .map(s => s.trim())
        importRowsToSheets(
            file,
            settings.spreadsheetId,
            settings.sheetId,
            columnOrder,
            settings.autoFill
        )
    })
})
