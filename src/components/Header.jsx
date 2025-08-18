import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

export default function Header() {
    const [pokedollars, setPokedollars] = useState(() => {
        return parseInt(localStorage.getItem('pokedollars')) || 0;
    });

    const [coins, setCoins] = useState([]);

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

    // listen to updates pokédollars
    useEffect(() => {
        const handleStorageChange = () => {
            const updatedPokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
            setPokedollars(updatedPokedollars);

            // add a coin
            const id = Date.now() + Math.random();
            setCoins(prev => [...prev, { id }]);

            // take it off after 
            setTimeout(() => {
                setCoins(prev => prev.filter(c => c.id !== id));
            }, 1500);
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('pokedollarsUpdate', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('pokedollarsUpdate', handleStorageChange);
        };
    }, []);

    return (
        <section className='header'>
            <article className='header-pokedollars'>
                <h3>Pokédollars</h3>
                <p id="pokedollars-count">{`${pokedollars}$`}</p>
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

            <article className="coin-animations">
                {coins.map(c => (
                    <img 
                        key={c.id}
                        src="/assets/icons/coin.png"
                        alt="coin"
                        className="coin"
                        style={{ left: `${c.left}%` }}
                    />
                ))}
            </article>
        </section>
    );
}