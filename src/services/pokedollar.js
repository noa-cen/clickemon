export function getPokedollar() {
    return parseInt(localStorage.getItem('pokedollars')) || 0;
}

export function setPokedollar(amount) {
    return localStorage.setItem('pokedollars', amount.toString());
}

export function addPokedollar(amount) {
    return setPokedollar(getPokedollar() + amount);
}

export function spendPokedollar(amount) {
    const currentPokedollar = getPokedollar();

    if (amount <= currentPokedollar) {
        setPokedollar(currentPokedollar - amount);
        return true;
    } 
    return false;
}