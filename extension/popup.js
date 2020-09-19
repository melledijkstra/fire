let btnImport = document.getElementById('btnImport');
let inputFile = document.getElementById('inputFile');

function key(arr, value) {
    return parseInt(Object.keys(arr).find(key => arr[key] === value));
}

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function arrayMove(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};

function correctColumns(data) {
    corrHeaders = ["Volgnr", "IBAN/BBAN", "Datum", "Bedrag", "Saldo na trn", "Naam tegenpartij", "Omschrijving-1", "", "", "", "", "Tegenrekening IBAN/BBAN", "", "Munt", "BIC", "Rentedatum", "Naam uiteindelijke partij", "Naam initi�rende partij", "BIC tegenpartij", "Code", "Batch ID", "Transactiereferentie", "Machtigingskenmerk", "Incassant ID", "Betalingskenmerk", "Omschrijving-2", "Omschrijving-3", "Reden retour", "Oorspr bedrag", "Oorspr munt", "Koers"];
    headers = data.shift(); // get the columns from the data
    
    data = transpose(data);

    console.log(data);
}

function insertData(data) {
    let body = {
        values: data
    };
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: '17LuzeRHb36KkkhaXgzIUaC1kDy_ce2HtGQWIho1RQQc',
        range: `A2:AF${data.length + 1}`,
        valueInputOption: "USER_ENTERED",
        resource: body
    }).then((response) => {
        let result = response.result;
        console.log(`${result.updatedCells} cells updated.`);
    });
}

btnImport.onclick = function (element) {
    let file = inputFile.files[0];
    Papa.parse(file, {
        complete: async (results) => {
            let data = results.data;
            console.log(data);
            correctColumns(data);
            //insertRows(data.length - 1);
            //await new Promise(r => setTimeout(r, 2000));
            //insertData(data);
        }
    });
};

let DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
let API_KEY = 'AIzaSyALN20gP4buN-tpLmb9GpSuMQVeqHVJCDE';

function insertRows(amount) {
    var emptyRowsRequest = {
        requests: [
            {
                "insertDimension": {
                    "range": {
                        "sheetId": 1790212660,
                        "dimension": "ROWS",
                        "startIndex": 1,
                        "endIndex": amount + 1
                    },
                    "inheritFromBefore": false
                }
            }
        ]
    }
    gapi.client.sheets.spreadsheets.batchUpdate(params, emptyRowsRequest).then((response) => {
        console.log(response);
    });
}

gapi.load('client', init);

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
