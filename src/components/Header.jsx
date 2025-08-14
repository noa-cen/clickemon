import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

export default function Header() {
    const pokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
    const activePokemon = JSON.parse(localStorage.getItem('activePokemon')) || {
        "id": 1,
        "name": "Bulbasaur",
        "image": "public/assets/images/pokemon/Bulbasaur - 1.png",
        "cry": "public/assets/audio/cries/bulbasaur.mp3",
        "type": ["Grass", "Poison"],
        "rarity": "starter",
        "evolutionMethod": ["exp"]
    };
    const number = String(activePokemon.id).padStart(3, '0');

    return (
        <section className='header'>
            <article className='header-pokedollars'>
                <h3>Pokédollars</h3>
                <p>{`${pokedollars}$`}</p>
            </article>
            <article className='header-exp'>
                <article className='header-pokemon-name'>
                    <h3>{activePokemon.name}</h3>
                    <p>#{number}</p>
                </article>
                <div className="xp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                    <span className="xp-bar__fill"></span>
                </div>
            </article>
        </section>
    );
}