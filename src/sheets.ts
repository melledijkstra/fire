export function insertData(rows: any[][], config: {
    spreadsheetId: string
}) {
    const { spreadsheetId } = config
    let body = {
        values: rows
    };
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `A2:${rows.length + 1}`,
        valueInputOption: "USER_ENTERED",
        resource: body
    });
}

export function insertRows(amount: number, config: {
    spreadsheetId: string,
    sheetId: number
}) {
    const {spreadsheetId, sheetId} = config
    var emptyRowsRequest = {
        requests: [
            {
                "insertDimension": {
                    "range": {
                        "sheetId": sheetId,
                        "dimension": "ROWS",
                        "startIndex": 1,
                        "endIndex": amount + 1
                    },
                    "inheritFromBefore": false
                }
            }
        ]
    }
    let params = { spreadsheetId: spreadsheetId }

    return gapi.client.sheets.spreadsheets.batchUpdate(params, emptyRowsRequest);
}

export function getSheetNames(spreadsheetId: string) {
    return gapi.client.sheets.spreadsheets.get({
        spreadsheetId
    });
}
