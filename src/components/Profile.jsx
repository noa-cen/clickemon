import React, { useEffect, useState } from 'react';
import ProfileInfoCard from './ProfileInfoCard';
import '../styles/Profile.css';

export default function Profile({ onClose }) {
    const namePlayer = localStorage.getItem('namePlayer');
    const ownedPokemons = JSON.parse(localStorage.getItem('ownedPokemons') || '[]');
    const pokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
    const clic = parseInt(localStorage.getItem('clic')) || 0;

    return (
        <section className="profile-container">
        <article className="profile-header">
            <h2>{namePlayer}'s profile</h2>
            <button className="close-button" onClick={onClose}>X</button>
        </article>
        <article className="profile-list">
            <ProfileInfoCard name="Pokédollars" image="/assets/icons/coin.png">
                {`${pokedollars}$`}
            </ProfileInfoCard>

            <ProfileInfoCard name="Pokémon caught" image="/assets/icons/pokedex.png">
                {ownedPokemons.length}
            </ProfileInfoCard>

            <ProfileInfoCard name="Total clics" image="/assets/icons/silph-scope.png">
                {clic}
            </ProfileInfoCard>

            <ProfileInfoCard name="Delete all" image="/assets/icons/escape-rope.png">
            </ProfileInfoCard>
        </article>
        </section>
    );
}
