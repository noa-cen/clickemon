import React from 'react';
import '../styles/ItemCard.css';

export default function BackpackItemCard({ item, quantity }) {    
    return (
        <section className="item-card">
            <img
                src={item.image}
                alt={item.name}
                className="item-image"
            />
            <article className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
            </article>
            <article className="item-number">{quantity}</article>
        </section>
    );
}