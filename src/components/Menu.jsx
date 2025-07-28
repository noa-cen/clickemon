import React, { useState } from 'react';
import '../styles/Menu.css';

export default function Menu({ active, onSelect }) {
    const items = [
        { id: 'pokedex', icon: '/assets/icons/pokedex.png', label: 'Pokédex' },
        { id: 'pokemart', icon: '/assets/icons/shop.png', label: 'Pokémart' },
        { id: 'backpack', icon: '/assets/icons/backpack.png', label: 'Backpack' },
        { id: 'profile', icon: '/assets/icons/ash.png', label: "Profile" },
    ];

const handleClick = (id) => {
    const clicAudio = new Audio('/assets/audio/sounds/click.mp3');
    clicAudio.play();
    if (onSelect) onSelect(id === active ? null : id);
};

    return (
        <nav className="menu-container">
            <h2>Menu</h2>
            <ul className="menu-list">
                {items.map(({ id, icon, label }) => (
                    <li
                        key={id}
                        className={`menu-item ${active === id ? 'active' : ''}`}
                        onClick={() => handleClick(id)}
                        title={label}
                    >
                        <img src={icon} alt={label} className="menu-icon" />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

