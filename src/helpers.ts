export function getKey(arr: string[], value: string) {
    let num = Object.keys(arr).find((key: any) => arr[key] === value)!
    return parseInt(num)
}

export function transpose(a: any[][]) {
    return Object.keys(a[0]).map(function (c: any) {
        return a.map(function (r) { return r[c]; });
    });
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