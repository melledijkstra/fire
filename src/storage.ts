import {Settings} from './types'

export const settingsFromStorage = (fn: (settings: Settings) => void) => {
    chrome.storage.sync.get(['spreadsheetId', 'sheetId', 'profiles', 'autoFill'], (items) => 
        fn({
            spreadsheetId: items.spreadsheetId,
            sheetId: items.sheetId,
            profiles: items.profiles || {},
            autoFill: items.autoFill,
        })
    );
}

export const saveSettings = (settings: Settings, fn: () => void) => chrome.storage.sync.set(settings, fn)