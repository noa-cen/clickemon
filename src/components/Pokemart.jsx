import React, { useEffect, useState } from 'react';
import pokemartData from '../data/pokemart.json';
import PokemartItemCard from './PokemartItemCard';
import '../styles/Pokemart.css';

export default function Pokemart({ onClose }) {
  return (
    <section className="pokemart-container">
      <div className="pokemart-header">
        <h2>Pokémart</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <article className="pokemart-list">
        {pokemartData
          .filter(item => item.shop === true)
          .map((item) => (
            <PokemartItemCard
              key={item.id}
              item={item}
            />
          ))}
      </article>
    </section>
  );
}

