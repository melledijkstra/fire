let btnImport = document.getElementById('btnImport');
let inputFile = document.getElementById('inputFile');
let elemStatus = document.getElementById('status');

function setStatus(status) {
    elemStatus.innerText = status;
}

function getKey(arr, value) {
    return parseInt(Object.keys(arr).find(key => arr[key] === value));
}

function transpose(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) { return r[c]; });
    });
}

function correctColumns(columnOrder, data) {
    // "Volgnr", "IBAN/BBAN", "Datum", "Bedrag", "Saldo na trn", "Naam tegenpartij", "Omschrijving-1", "", "", "", "", "Tegenrekening IBAN/BBAN", "", "Munt", "BIC", "Rentedatum", "Naam uiteindelijke partij", "Naam initi�rende partij", "BIC tegenpartij", "Code", "Batch ID", "Transactiereferentie", "Machtigingskenmerk", "Incassant ID", "Betalingskenmerk", "Omschrijving-2", "Omschrijving-3", "Reden retour", "Oorspr bedrag", "Oorspr munt", "Koers"
    console.log(columnOrder);
    CSVheaders = data.shift(); // get the columns from the data

    data = transpose(data);

    console.log(data);

    corrData = [];
    columnOrder.forEach(header => {
        console.log(header, CSVheaders.includes(header));
        if (CSVheaders.includes(header)) {
            corrKey = getKey(CSVheaders, header);
            corrData.push(data[corrKey]);
        } else {
            corrData.push([]);
        }
    });

    corrData = transpose(corrData);
    console.log(corrData);
    return corrData;
}

function cleanData(data) {
    if (data[data.length - 1].length == 1) {
        data.pop();
    }
}

btnImport.onclick = function (e) {
    e.preventDefault();
    let file = inputFile.files[0];
    Papa.parse(file, {
        complete: async (results) => {
            let data = results.data;
            cleanData(data);
            chrome.storage.sync.get(['columnOrder'], (result) => {
                let columnOrder = result.columnOrder.split(',');
                data = correctColumns(columnOrder, data);
                insertRows(data.length).then(() => {
                    insertData(data).then((response) => {
                        let result = response.result;
                        setStatus(`${data.length} rows added and ${result.updatedCells} cells updated.`);
                    });
                });
            });
        }
    });
};
