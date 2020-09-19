let btnImport = document.getElementById('btnImport');
let inputFile = document.getElementById('inputFile');

btnImport.onclick = function (element) {
    console.log(inputFile.value);
    let file = inputFile.files[0];
    Papa.parse(file, {
        complete: (results) => {
            console.log("Finished:", results.data);
        }
    });
};