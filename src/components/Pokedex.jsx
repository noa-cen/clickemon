import React, { useEffect, useState } from 'react';
import pokemonsData from '../data/pokemon.json';
import PokemonCard from './PokemonCard';
import '../styles/Pokedex.css';

export default function Pokedex({ onClose }) {
  const [ownedIds, setOwnedIds] = useState([]);
  const [activePokemon, setActivePokemon] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('ownedPokemons');
    if (stored) {
      setOwnedIds(JSON.parse(stored));
    }
  }, []);

  const handleSelectPokemon = (pokemon) => {
    setActivePokemon(pokemon);
    const cryAudio = new Audio(pokemon.cry.replace('public/', '/'));
    cryAudio.play();
  };

  return (
    <section className="pokedex-container">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Pokédex</h2>
      <article className="pokedex-list">
        {pokemonsData.map((pokemon) => {
          const isOwned = ownedIds.includes(pokemon.id);
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={{ ...pokemon, owned: isOwned }}
              onSelect={handleSelectPokemon}
            />
          );
        })}
      </article>
    </section>
  );
}

