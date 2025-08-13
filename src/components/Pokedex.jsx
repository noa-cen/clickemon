import React, { useEffect, useState } from 'react';
import pokemonsData from '../data/pokemon.json';
import PokemonCard from './PokemonCard';
import '../styles/Pokedex.css';

export default function Pokedex({ onClose, setActivePokemon }) {
  const [ownedIds, setOwnedIds] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('ownedPokemons');
    if (stored) {
      setOwnedIds(JSON.parse(stored));
    }
  }, []);

  const handleSelectPokemon = (pokemon) => {
    const cryAudio = new Audio(pokemon.cry.replace('public/', '/'));
    cryAudio.play();

    setActivePokemon(pokemon);
  };

  return (
    <section className="pokedex-container">
      <article className="pokedex-header">
        <h2>Pokédex</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </article>
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