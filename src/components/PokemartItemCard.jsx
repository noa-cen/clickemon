import React from 'react';
import '../styles/ItemCard.css';

export default function PokemartItemCard({ item, onClick, style, animate }) {
  const itemImage = item.image.replace('public/', '/');

  return (
    <section 
      className={`item-card ${animate ? 'animate-buy' : ''}`}
      onClick={onClick}
      style={style}
      role="button"
    >
        <img
            src={itemImage}
            alt={item.name}
            className="item-image"
        />
        <article className="item-info">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
        </article>
        <article className="item-number">{item.cost}$</article>
    </section>
  );
}
