import { parse } from 'papaparse'
import { insertData, insertRows } from "./sheets"
import * as H from './helpers'
import { initializeGAPI } from './authentication'

const inputFile: HTMLInputElement = <HTMLInputElement>document.getElementById('inputFile')!
const statusElem = document.getElementById('status')!
const importForm: HTMLFormElement = <HTMLFormElement>document.getElementById('importForm')!

function setStatus(status: string) {
    statusElem.innerText = status
}

// runs when DOM is loaded
(function () {
    initializeGAPI(() => {
        console.log('gapi initialized and token retrieved')
        document.querySelectorAll('[disabled]').forEach((elem) => (<HTMLInputElement>elem).disabled = false)
    }, (error) => {
        console.log('error', error)
        setStatus('Not authorized, go to options page to authorize this app')
        showConfigureButton()
    })
})()

function showConfigureButton() {
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
function switchColumns(
    correctHeaders: string[], // the correct order of columns
    data: string[][] // the matrix of data retrieved from CSV
) {
    const CSVheaders = data.shift() // get the columns from the data (these are not in correct order yet!)
    data = H.transpose(data) // transpose so its easier to work with the matrix data

    let corrData: string[][] = [] // prepare our correct matrix (this will store the data with correct columns)
    correctHeaders.forEach((header: string) => { // loop through the correct columns
        console.log(header, CSVheaders?.includes(header))
        if (CSVheaders?.includes(header)) {
            // if header exists get the rows corresponding to this header and add it to the correct matrix
            corrData.push(data[H.getKey(CSVheaders, header)])
        } else {
            corrData.push([]) // add empty array when header doesn't exist
            // this is done so that the desired length is kept while going trough the desired headings
        }
    });
    // transpose back into original state
    corrData = H.transpose(corrData)
    console.log(corrData)
    return corrData
}

function importRowsToSheets(file: File, config: {
    spreadsheetId: string,
    sheetId: number,
    columnOrder: string[]
}) {
    let { columnOrder } = config;
    parse(file, {
        complete: async (results) => {
            let data: any[] = results.data
            H.cleanData(data)
            data = switchColumns(columnOrder, data)
            insertRows(data.length, config)
                .then(() => insertData(data, config))
                .then((response) => {
                    console.log(response.result)
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
    chrome.storage.sync.get(['spreadsheetId', 'sheetId', 'columnOrder'], (items) => {
        let columnOrder: string[] = items.columnOrder.split(',')
        columnOrder = columnOrder.map(s => s.trim())
        importRowsToSheets(file, {
            spreadsheetId: items.spreadsheetId,
            sheetId: items.sheetId,
            columnOrder: columnOrder
        })
    })

})
