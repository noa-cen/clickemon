import React, { useEffect, useState } from 'react';
import pokemartData from '../data/pokemart.json';
import BackpackItemCard from './BackpackItemCard';
import '../styles/Backpack.css';

export default function Backpack ({ onClose }) {
    const inventory = JSON.parse(localStorage.getItem('inventory') || '{}');

    return (
        <section className="backpack-container">
            <div className="backpack-header">
                <h2>Backpack</h2>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <article className="backpack-list">
                {pokemartData
                    .filter(item => item.name in inventory)
                    .map((item) => (
                        <BackpackItemCard
                            key={item.id}
                            item={item}
                            quantity={inventory[item.name]}
                        />
                    ))}
            </article>
        </section>
    );
}
