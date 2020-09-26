import { initializeGAPI, removeToken, retrieveToken } from './authentication'
import { getSheetNames } from './sheets'

const inSpreadsheetId: HTMLInputElement = <HTMLInputElement>document.getElementById("spreadsheetId")!
const inSheetId: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sheetId")!
const inColumnOrder: HTMLInputElement = <HTMLInputElement>document.getElementById("columnOrder")!
const statusElem = document.getElementById('status')!
const btnAuth: HTMLButtonElement = <HTMLButtonElement>document.getElementById('oauth')!
const btnRemove: HTMLButtonElement = <HTMLButtonElement>document.getElementById('remove')!

const settingsFrom: HTMLFormElement = <HTMLFormElement>document.getElementById('settingsForm');

function setStatus(s: string) {
    statusElem.innerText = s
}

(function () { // runs when DOM is loaded
    initializeGAPI(() => {
        console.log('gapi initialized and token retrieved')
        onAuthorized()
    }, (error) => {
        console.log('error', error);
        setStatus('Not authorized, click the button to authorize this app')
    });
    chrome.storage.sync.get(['spreadsheetId', 'columnOrder'], (items) => {
        inSpreadsheetId.value = items.spreadsheetId || inSpreadsheetId.value
        inColumnOrder.value = items.columnOrder || inColumnOrder.value
    });
})();

function onAuthorized() {
    setStatus('Authorized')
    chrome.storage.sync.get(['spreadsheetId', 'sheetId'], (items) => {
        onSpreadsheetChange(items.spreadsheetId, () => inSheetId.value = items.sheetId)
    })
    document.querySelectorAll('[disabled]').forEach((item) => {
        (<HTMLInputElement>item).disabled = false;
    })
}

function onSpreadsheetChange(spreadsheetId: string, afterChange?: () => void) {
    getSheetNames(spreadsheetId).then((response) => {
        if(response.result.sheets !== undefined) buildSheetOptions(response.result.sheets)
        afterChange?.()
    }, (error) => {
        console.log(error)
        setStatus(error.result.error.message)
    })
}

function removeOptions() {
    let l = inSheetId.options.length
    for (let i = l - 1; i >= 0; i--) {
        inSheetId.options.remove(i);
    }
}

function buildSheetOptions(sheets: gapi.client.sheets.Sheet[]) {
    sheets.map((sheet) => {
        if (sheet.properties?.title !== undefined && sheet.properties.sheetId !== undefined) {
            addOption(sheet.properties.title, sheet.properties.sheetId)
        }
    })
    inSheetId.disabled = false
}

function addOption(title: string, value: any) {
    let opt = document.createElement('option')
    opt.appendChild(document.createTextNode(title))
    opt.value = String(value)
    inSheetId.appendChild(opt)
}

inSpreadsheetId.addEventListener('change', (e) => {
    removeOptions();
    let newSSId = (<HTMLInputElement>e.target).value
    if (newSSId) {
        onSpreadsheetChange(newSSId)
    }
});

btnAuth.addEventListener('click', (e) => {
    retrieveToken((token) => {
        console.log('retrieved token', token)
        onAuthorized()
    }, () => {
        console.log('user did not authorize app :(')
        setStatus('You have to authorize the app to continue. If you did, something went wrong...')
    });
});

btnRemove.addEventListener('click', (e) => {
    removeToken(() => {
        console.log('token removed')
        setStatus('Unauthorized!')
        document.querySelectorAll('input,button,select,textarea').forEach((elem) => {
            if (elem.id == 'oauth') {
                return
            }
            (<HTMLInputElement>elem).disabled = true;
        })
    });
})

settingsFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    let spreadsheetId = inSpreadsheetId.value
    let sheetId = inSheetId.options[inSheetId.selectedIndex].value
    let columnOrder = inColumnOrder.value
    chrome.storage.sync.set({
        spreadsheetId,
        sheetId,
        columnOrder
    }, () => setStatus("Settings saved!"))
})

setStatus('Extension loaded');
