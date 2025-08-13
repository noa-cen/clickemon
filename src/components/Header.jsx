import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

export default function Header() {
    const pokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
    const activePokemon = JSON.parse(localStorage.getItem('activePokemon'));

    return (
        <section className='header'>
            <article className='header-pokedollars'>
                <h3>Pokédollars</h3>
                <p>{`${pokedollars}$`}</p>
            </article>
            <article className='header-exp'>
                <h3>{activePokemon.name}</h3>
                <div class="xp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                    <span class="xp-bar__fill"></span>
                </div>
            </article>
        </section>
    );
}