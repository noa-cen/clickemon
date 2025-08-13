import React from 'react';
import '../styles/ItemCard.css';

export default function PokemartItemCard({ item, onClick, style, animate, owned }) {
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
            className={`item-image ${owned ? 'grayscale' : ''}`}
        />
        <article className="item-info">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
        </article>
        <article className="item-number">{owned ? `` : `${item.cost}$`}</article>
    </section>
  );
}
