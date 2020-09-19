let btnSave = document.getElementById("btnSave");
let inSpreadsheetId = document.getElementById("spreadsheetId");
let inSheetId = document.getElementById("sheetId");
let inColumnOrder = document.getElementById("columnOrder");

var spreadsheetId;
var sheetId;
var columnOrder;

(function() {
    chrome.storage.sync.get(['spreadsheetId', 'sheetId', 'columnOrder'], (result) => {
        spreadsheetId = result.spreadsheetId;
        sheetId = result.sheetId;
        columnOrder = result.columnOrder;
        inSpreadsheetId.value = spreadsheetId || '';
        inSheetId.value = sheetId || '';
        inColumnOrder.value = columnOrder || '';
    });
})();

btnSave.onclick = (e) => {
    e.preventDefault();
    let spreadsheetId = inSpreadsheetId.value;
    let sheetId = inSheetId.value;
    let columnOrder = inColumnOrder.value;
    chrome.storage.sync.set({
        spreadsheetId,
        sheetId,
        columnOrder
    }, () => setStatus("Settings saved!"));
}

function setStatus(status) {
    document.getElementById('status').innerText = status;
}

setStatus('Extension loaded');
