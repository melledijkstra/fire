import { initializeGAPI, removeToken, retrieveToken } from './authentication'
import { getSheetNames } from './sheets'
import { removeOptions, addOption } from './ui'
import { Settings } from './types'
import {settingsFromStorage, saveSettings} from './storage'

const inSpreadsheetId: HTMLInputElement = <HTMLInputElement>document.getElementById("spreadsheetId")!
const inSheetId: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sheetId")!
const inColumnOrder: HTMLInputElement = <HTMLInputElement>document.getElementById("columnOrder")!
const inProfileName: HTMLInputElement = <HTMLInputElement>document.getElementById('profileName')!
const profileDataList: HTMLDataListElement = <HTMLDataListElement>document.getElementById('profileList')!
const checkAutoFill: HTMLInputElement = <HTMLInputElement>document.getElementById("checkAutoFill")!
const statusElem = document.getElementById('status')!
const btnAuth: HTMLButtonElement = <HTMLButtonElement>document.getElementById('oauth')!
const btnRemove: HTMLButtonElement = <HTMLButtonElement>document.getElementById('remove')!
const btnDeleteProfile: HTMLButtonElement = <HTMLButtonElement>document.getElementById('deleteProfile')!
const settingsFrom: HTMLFormElement = <HTMLFormElement>document.getElementById('settingsForm');

let baseSettings: Settings;

const setStatus = (s: string) => {
    statusElem.innerText = s
}

(() => { // runs when DOM is loaded
    initializeGAPI(() => {
        console.log('gapi initialized and token retrieved')
        onAuthorized()
    }, (error) => {
        console.log('error', error);
        setStatus('Not authorized, click the button to authorize this app')
    });
    settingsFromStorage((settings) => {
        baseSettings = settings
        Object.keys(settings.profiles).forEach((key) => {
            addOption(profileDataList, settings.profiles[key], key, key)
        })
        inSpreadsheetId.value = settings.spreadsheetId || inSpreadsheetId.value
        checkAutoFill.checked = settings.autoFill !== null ? settings.autoFill : checkAutoFill.checked
    })
})();

const onAuthorized = () => {
    setStatus('Authorized')
    chrome.storage.sync.get(['spreadsheetId', 'sheetId'], (items) => {
        onSpreadsheetChange(items.spreadsheetId, () => inSheetId.value = items.sheetId)
    })
    document.querySelectorAll('[disabled]').forEach((item) => {
        (<HTMLInputElement>item).disabled = false;
    })
}

const onSpreadsheetChange = (spreadsheetId: string, afterChange?: () => void) => {
    getSheetNames(spreadsheetId).then((response) => {
        if(response.result.sheets !== undefined) buildSheetOptions(response.result.sheets)
        afterChange?.()
    }, (error) => {
        console.log(error)
        setStatus(error.result.error.message)
    })
}

const buildSheetOptions = (sheets: gapi.client.sheets.Sheet[]) => {
    sheets.map((sheet) => {
        if (sheet.properties?.title !== undefined && sheet.properties.sheetId !== undefined) {
            addOption(inSheetId, sheet.properties.title, sheet.properties.sheetId)
        }
    })
    inSheetId.disabled = false
}

inSpreadsheetId.addEventListener('change', (e) => {
    removeOptions(inSheetId);
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

btnDeleteProfile.addEventListener('click', (e) => {
    let pname = inProfileName.value
    if (pname in baseSettings.profiles) {
        delete baseSettings.profiles[pname]
        inColumnOrder.value = ""
        let item = profileDataList.options.namedItem(pname)
        if (item) {
            profileDataList.options[item.index].remove()
        }
        inProfileName.value = ""
    }
})

inProfileName.addEventListener('change', (e) => {
    let pname = inProfileName.value
    inColumnOrder.value = (pname in baseSettings.profiles) ? baseSettings.profiles[pname] : ""
})

inColumnOrder.addEventListener('change', (e) => {
    let pname = inProfileName.value
    let listItem = <HTMLOptionElement>profileDataList.querySelector(`[value="${pname}"]`)
    if (listItem !== null) {
        listItem.innerText = inColumnOrder.value
    }
})

settingsFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const newSettings: Settings = {
        spreadsheetId: inSpreadsheetId.value,
        sheetId: parseInt(inSheetId.options[inSheetId.selectedIndex].value),
        profiles: {
            ...baseSettings.profiles,   
            [inProfileName.value]: inColumnOrder.value
        },
        autoFill: checkAutoFill.checked
    }
    saveSettings(
        newSettings, 
        () => {
            setStatus("Settings saved!")
            baseSettings = newSettings
        }
    )
})

setStatus('Extension loaded');
