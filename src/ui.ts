export const removeOptions = (selectElement: HTMLSelectElement) => {
    let l = selectElement.options.length
    for (let i = l - 1; i >= 0; i--) {
        selectElement.options.remove(i);
    }
}

export const addOption = (
    selectElement: HTMLSelectElement | HTMLDataListElement,
    title: string,
    value: any,
    name?: string
) => {
    let opt = document.createElement('option')
    opt.appendChild(document.createTextNode(title))
    if (name) { 
        opt.setAttribute('name', name) 
    }
    opt.value = String(value)
    selectElement.appendChild(opt)
}