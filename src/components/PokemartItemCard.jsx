import React from 'react';
import '../styles/PokemartItemCard.css';

export default function PokemartItemCard({ item }) {
  const itemImage = item.image.replace('public/', '/');

  return (
    <section
        className="item-card">
        <img
            src={itemImage}
            alt={item.name}
            className="item-image"
        />
        <article className="item-info">
            <span className="item-name">{item.name}</span>
            <span className="item-description">{item.description}</span>
        </article>
        <article className="item-price">{item.cost}$</article>
    </section>
  );
}