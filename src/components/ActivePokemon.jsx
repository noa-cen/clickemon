import React from 'react';
import '../styles/ActivePokemon.css';

export default function ActivePokemon({ activePokemon }) {
  if (!activePokemon) return null;

  const gainExp = (id) => {
        const clicAudio = new Audio('/assets/audio/sounds/exp.mp3');
        clicAudio.play();
  };

  // Classes for each pokemon
  const classes = `pokemon-${activePokemon.name
    .toLowerCase()
    .replace(/[^a-z0-9-♀♂]+/g, '-')}`;

  return (
    <img
      src={activePokemon.image}
      alt={activePokemon.name}
      className={`pokemon ${classes}`}
      onClick={() => gainExp(activePokemon.id)}
    />
  );
}
