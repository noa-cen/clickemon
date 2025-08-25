import React, { useEffect, useState } from 'react';
import '../styles/Character.css';
import { getPokedollar, addPokedollar } from '../services/pokedollar';
import { addClic } from '../services/clic';

export default function Character({ setPokedollar }) {
    const gainPokedollar = () => {
        const clicAudio = new Audio('/assets/audio/sounds/money.mp3');
        clicAudio.play();

        addPokedollar(1);
        addClic(1);
        setPokedollar(getPokedollar());
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