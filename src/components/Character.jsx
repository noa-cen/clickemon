import React, { useEffect, useState } from 'react';
import '../styles/Character.css';

export default function Character() {
    const gainPokedollar = () => {
        const clicAudio = new Audio('/assets/audio/sounds/money.mp3');
        clicAudio.play();
    };

    return (
        <img 
        src='/assets/images/ash.png' 
        alt= 'Ash' 
        className='character-ash'
        onClick={() => gainPokedollar()}
        />
    )
}