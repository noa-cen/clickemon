import React from 'react';
import '../styles/ActivePokemon.css';
import { getExpActivePokemon, addExp } from '../services/pokemon';
import { addClic } from '../services/clic';

export default function ActivePokemon({ activePokemon, setExp }) {
  const gainExp = () => {
        addExp(1, activePokemon.id);
        addClic(1);
        setExp(getExpActivePokemon(activePokemon.id));
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
      onClick={gainExp}
    />
  );
}
