let DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
let API_KEY = 'AIzaSyALN20gP4buN-tpLmb9GpSuMQVeqHVJCDE';

function insertData(rows) {
    let body = {
        values: rows
    };
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: '17LuzeRHb36KkkhaXgzIUaC1kDy_ce2HtGQWIho1RQQc',
        range: `A2:${rows.length+1}`,
        valueInputOption: "USER_ENTERED",
        resource: body
    });
}

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
    let params = {spreadsheetId: '17LuzeRHb36KkkhaXgzIUaC1kDy_ce2HtGQWIho1RQQc'}

    return gapi.client.sheets.spreadsheets.batchUpdate(params, emptyRowsRequest);
}

function init() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS
    }).then(() => {
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
            gapi.auth.setToken({ access_token: token });
        })
    })
}

gapi.load('client', init);