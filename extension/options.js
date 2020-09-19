let btnSave = document.getElementById("btnSave");
let inSpreadsheetId = document.getElementById("spreadsheetId");
let inSheetId = document.getElementById("sheetId");

var spreadsheetId;
var sheetId;

(function() {
    chrome.storage.sync.get(['spreadsheetId', 'sheetId'], (result) => {
        spreadsheetId = result.spreadsheetId;
        sheetId = result.sheetId;
        inSpreadsheetId.value = spreadsheetId;
        inSheetId.value = sheetId;
    });
})();

btnSave.onclick = (e) => {
    let spreadsheetId = inSpreadsheetId.value;
    let sheetId = inSheetId.value;
    chrome.storage.sync.set({
        spreadsheetId,
        sheetId
    }, () => setStatus("Settings saved!"));
}

function setStatus(status) {
    document.getElementById('status').innerText = status;
}

setStatus('Extension loaded');

let DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
let API_KEY = 'AIzaSyALN20gP4buN-tpLmb9GpSuMQVeqHVJCDE';

gapi.load('client', init);

var emptyRowsRequest = {
    requests: [
        {
            "insertDimension": {
                "range": {
                    "sheetId": 1790212660,
                    "dimension": "ROWS",
                    "startIndex": 1,
                    "endIndex": 6
                },
                "inheritFromBefore": false
            }
        }
    ]
}

function insertRows() {
    gapi.client.sheets.spreadsheets.batchUpdate(params, emptyRowsRequest).then((response) => {
        console.log(response);
    });
}

function init() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS
    }).then(() => {
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
            gapi.auth.setToken({ access_token: token });

            params = {
                spreadsheetId: '17LuzeRHb36KkkhaXgzIUaC1kDy_ce2HtGQWIho1RQQc',
            }
        })
    })
}
