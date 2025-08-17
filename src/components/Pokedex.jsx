import React, { useEffect, useState } from 'react';
import pokemonsData from '../data/pokemon.json';
import PokemonCard from './PokemonCard';
import '../styles/Pokedex.css';

export default function Pokedex({ onClose, setActivePokemon }) {
  const [ownedIds, setOwnedIds] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredPokemons = pokemonsData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="pokedex-container">
      <article className="pokedex-header">
        <h2>Pokédex</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </article>

      {/* Search bar */}
      <article className="pokedex-search">
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </article>

      <article className="pokedex-list">
        {filteredPokemons.map((pokemon) => {
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
