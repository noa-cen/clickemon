import React from 'react';
import '../styles/PokemonCard.css';

export default function PokemonCard({ pokemon, onSelect }) {
  const number = String(pokemon.id).padStart(3, '0');
  const pokemonImage = pokemon.image.replace('public/', '/');

  return (
    <section
        className={`pokemon-card ${pokemon.owned ? 'owned' : 'unowned'}`}
        onClick={() => {
            if (pokemon.owned) { onSelect(pokemon); }
        }}
    >
        <img
            src={pokemonImage}
            alt={pokemon.name}
            className="pokemon-image"
        />
        <article className="pokemon-info">
            <span className="pokemon-name">{pokemon.name}</span>
            <span className="pokemon-number">#{number}</span>
        </article>
        <article className="pokemon-types">
            {pokemon.type.map((typeName) => {
            const typeImage = `/assets/images/type/${typeName.toLowerCase()}.png`;
            return (
                <img
                key={typeName}
                src={typeImage}
                alt={typeName}
                title={typeName}
                className="type-icon"
                />
            );
            })}
        </article>
    </section>
  );
}
