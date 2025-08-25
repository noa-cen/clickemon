import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

export default function Header({ pokedollar }) {
    const activePokemon = JSON.parse(localStorage.getItem('activePokemon')) || {
        "id": 1,
        "name": "Bulbasaur",
        "image": "/assets/images/pokemon/Bulbasaur - 1.png",
        "cry": "/assets/audio/cries/bulbasaur.mp3",
        "type": ["Grass", "Poison"],
        "rarity": "starter",
        "evolutionMethod": ["exp"]
    };
    const number = String(activePokemon.id).padStart(3, '0');

    return (
        <section className='header'>
            <article className='header-pokedollars'>
                <h3>Pokédollars</h3>
                <p id="pokedollars-count">{`${pokedollar}$`}</p>
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