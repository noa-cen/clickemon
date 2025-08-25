export function getClic() {
    return parseInt(localStorage.getItem('clic')) || 0;
}

export function setClic(total) {
    return localStorage.setItem('clic', total.toString());
}

export function addClic(number) {
    const currentClic = getClic();
    return setClic(currentClic + number);
}