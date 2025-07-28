import React, { useState } from 'react';
import '../styles/Menu.css';

export default function Menu({ onSelect }) {
  const [active, setActive] = useState(null);

  const items = [
    { id: 'pokedex', icon: '/assets/icons/pokedex.png', label: 'Pokédex' },
    { id: 'shop', icon: '/assets/icons/shop.png', label: 'Shop' },
    { id: 'backpack', icon: '/assets/icons/backpack.png', label: 'Backpack' },
    { id: 'ash', icon: '/assets/icons/ash.png', label: 'Ash' },
  ];

  const handleClick = (id) => {
    setActive(id);
    if (onSelect) onSelect(id);
  };

  return (
    <nav className="menu-container">
      <h2>Menu</h2>
      <ul className="menu-list">
        {items.map(({ id, icon, label }) => (
          <li
            key={id}
            className={`menu-item ${active === id ? 'active' : ''}`}
            onClick={() => handleClick(id)}
            title={label}
          >
            <img src={icon} alt={label} className="menu-icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
