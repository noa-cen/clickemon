export function getActivePokemon() {
    const defaultPokemon = {
        id: 1,
        name: "Bulbasaur",
        image: "/assets/images/pokemon/Bulbasaur - 1.png",
        cry: "/assets/audio/cries/bulbasaur.mp3",
        type: ["Grass", "Poison"],
        rarity: "starter",
        evolutionMethod: ["exp"]
    };

    return JSON.parse(localStorage.getItem("activePokemon")) || defaultPokemon;
}

export function getExpActivePokemon(id) {
    return parseInt(localStorage.getItem(`exp-${id}`)) || 0;
}

export function setExpActivePokemon(exp) {
    return localStorage.setItem(`exp-${getActivePokemon().id}`, exp.toString());
}

export function addExp(amount, id) {
    if ((getExpActivePokemon(id) + amount) > 100 ) {
        const clicAudio = new Audio('/assets/audio/sounds/error.mp3');
        clicAudio.play();
        return setExpActivePokemon(100);
    } else if ((getExpActivePokemon(id) + amount) < 100 ) {
        const clicAudio = new Audio('/assets/audio/sounds/exp.mp3');
        clicAudio.play();
        return setExpActivePokemon(getExpActivePokemon(id) + amount);
    } else if ((getExpActivePokemon(id) + amount) == 100 ) {
        const clicAudio = new Audio('/assets/audio/sounds/evolution.mp3');
        clicAudio.play();
        return setExpActivePokemon(getExpActivePokemon(id) + amount);
    }
}