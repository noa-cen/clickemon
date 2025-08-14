import React from 'react';
import '../styles/ActivePokemon.css';

export default function ActivePokemon({ activePokemon }) {
  if (!activePokemon) return null;

  const imageSrc = activePokemon.image.replace('public/', '/');

  // Classes for each pokemon
const classes = `pokemon-${activePokemon.name
  .toLowerCase()
  .replace(/[^a-z0-9-♀♂]+/g, '-')}`;

  return (
    <img
      src={imageSrc}
      alt={activePokemon.name}
      className={`pokemon ${classes}`}
    />
  );
}
