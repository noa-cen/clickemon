import React, { useEffect, useState } from 'react';
import '../styles/Character.css';

export default function Character() {
    const gainPokedollar = () => {
        const clicAudio = new Audio('/assets/audio/sounds/money.mp3');
        clicAudio.play();

        // Current Pokédollars and clics
        const currentPokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
        const currentClics = parseInt(localStorage.getItem('clic')) || 0;

        // Add 1 pokédollars and 1 clic
        const newPokedollars = currentPokedollars + 1;
        const newClics = currentClics + 1;

        // Save in localStorage
        localStorage.setItem('pokedollars', newPokedollars.toString());
        localStorage.setItem('clic', newClics.toString());

        // Trigger a custom event to notify other components
        window.dispatchEvent(new Event('pokedollarsUpdate'));
    };

    return (
        <img 
            src='/assets/images/ash.png' 
            alt='Ash' 
            className='character-ash'
            onClick={gainPokedollar}
        />
    )
}