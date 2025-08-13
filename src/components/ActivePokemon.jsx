import React from 'react';
import '../styles/ActivePokemon.css';

export default function ActivePokemon({ activePokemon }) {
  if (!activePokemon) return null;

  const imageSrc = activePokemon.image.replace('public/', '/');

  return (
    <img
      src={imageSrc}
      alt={activePokemon.name}
      className='pokemon'
    />
  );
}
