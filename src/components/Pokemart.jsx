import React, { useEffect, useState } from 'react';
import pokemartData from '../data/pokemart.json';
import PokemartItemCard from './PokemartItemCard';
import '../styles/Pokemart.css';
import { getInventory, buyItem } from '../services/pokemart';

export default function Pokemart({ onClose }) {
    const [inventory, setInventory] = useState({});
    const [animatedItem, setAnimatedItem] = useState(null);

    useEffect(() => {
    setInventory(getInventory());
    }, []);

    const handleBuyItem = (itemName) => {
        buyItem(itemName);

        const audio = new Audio('/assets/audio/sounds/buyItem.mp3');
        audio.play();

        setAnimatedItem(itemName);
        setTimeout(() => {
            setAnimatedItem(null);
        }, 600);
    };

    return (
        <section className="pokemart-container">
            <article className="pokemart-header">
                <h2>Pokémart</h2>
                <button className="close-button" onClick={onClose}>X</button>
            </article>
            <article className="pokemart-list">
                {pokemartData
                    .filter(item => item.shop === true)
                    .map((item) => (
                        <PokemartItemCard
                            key={item.id} 
                            item={item}
                            onClick={() => handleBuyItem(item.name)}
                            style={{ cursor: 'pointer' }}
                            animate={animatedItem === item.name}
                        />
                    ))}
            </article>
        </section>
    );
}