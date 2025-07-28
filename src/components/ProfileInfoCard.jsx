import React from 'react';
import '../styles/ProfileInfoCard.css';

export default function ProfileCard({ name, image, children, onClick, style }) {
  return (
    <section 
        className="profile-card" 
        onClick={onClick} 
        style={style} 
        role={onClick ? 'button' : undefined} 
    >
        <article className="profile-card-image-container">
            <img src={image} alt={name} className="profile-card-image" />
        </article>
        <article className="profile-card-content">
            <h3>{name}</h3>
            {children}
        </article>
    </section>
  );
}
