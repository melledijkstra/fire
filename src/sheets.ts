export function buildInsertDataRequest(spreadsheetId: string, rows: any[][]) {
    return {
        spreadsheetId,
        range: `A2:${rows.length + 1}`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: rows
        }
    };
}

export function buildAutoFillRequest(sheetId: number, length: number, columnIndex: number): gapi.client.sheets.AutoFillRequest {
    return {
        useAlternateSeries: false,
        sourceAndDestination: {
            source: {
                sheetId,
                startRowIndex: 1, // end at second row, because first row are headers
                endRowIndex: length + 1, // start at last row that was still populated, this is the reference for the autofill
                startColumnIndex: columnIndex,
                endColumnIndex: columnIndex
            },
            dimension: "ROWS", // autofill rows
            fillLength: -length // autofill up with the length of the given data
        }
    }
}

export function buildInsertRowsRequest(
    sheetId: number,
    amount: number
): gapi.client.sheets.InsertDimensionRequest {
    return {
        range: {
            sheetId: sheetId,
            dimension: "ROWS",
            startIndex: 1,
            endIndex: amount + 1
        }
    }
}

export function getSheetNames(spreadsheetId: string) {
    return gapi.client.sheets.spreadsheets.get({
        spreadsheetId
    });
}
