export function getKey(arr: string[], value: string) {
    let num = Object.keys(arr).find((key: any) => arr[key] === value)!
    return parseInt(num)
}

export function transpose(arr: any[][]) {
    return Object.keys(arr[0]).map((c: any) => { return arr.map((r) => { return r[c] })})
}

export function goToOptions() {
    if(chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'))
    }
}

export function cleanData(data: any[]) {
    if (data[data.length - 1].length == 1) {
        data.pop()
    }
}