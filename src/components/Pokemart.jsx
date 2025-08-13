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

    const handleBuyItem = (itemName, itemCost) => {
        const result = buyItem(itemName, itemCost);

        if (result.success) {
            const audio = new Audio('/assets/audio/sounds/buyItem.mp3');
            audio.play();

            setAnimatedItem(itemName);
            setTimeout(() => {
                setAnimatedItem(null);
            }, 600);

            setInventory(result.inventory);
        } else {
            const audio = new Audio('/assets/audio/sounds/error.mp3');
            audio.play();
        }
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
                    .map((item) => {
                        const isOwned = item.unique && inventory[item.name] > 0;
                        return (
                            <PokemartItemCard
                                key={item.id} 
                                item={item}
                                onClick={() => handleBuyItem(item.name, item.cost)}
                                animate={animatedItem === item.name}
                                owned={isOwned}
                            />
                        );
                    })}
            </article>
        </section>
    );
}