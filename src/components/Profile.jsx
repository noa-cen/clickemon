import React, { useEffect, useState } from 'react';
import ProfileInfoCard from './ProfileInfoCard';
import '../styles/Profile.css';

export default function Profile({ onClose }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const namePlayer = localStorage.getItem('namePlayer');
    const ownedPokemons = JSON.parse(localStorage.getItem('ownedPokemons') || '[]');
    const pokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;
    const clic = parseInt(localStorage.getItem('clic')) || 0;

    const handleDeleteAll = () => {
        const clicAudio = new Audio('/assets/audio/sounds/gameOver.mp3');
        clicAudio.play();

        // Start animation
        setIsGameOver(true);

        setTimeout(() => {
            localStorage.clear();
            setShowConfirm(false);
            setIsGameOver(false);
            window.location.reload();
        }, 4000); // 4 secondes for complete animation
    };

    const playClickSound = () => {
        const clicAudio = new Audio('/assets/audio/sounds/click.mp3');
        clicAudio.play();
    };

    const handleCloseConfirm = () => {
        playClickSound();
        setShowConfirm(false);
    };

    const handleOpenConfirm = () => {
        playClickSound();
        setShowConfirm(true);
    };

    return (
        <>
        <section className="profile-container">
            <article className="profile-header">
            <h2>{namePlayer}'s profile</h2>
            <button className="close-button" onClick={onClose}>X</button>
            </article>
            <article className="profile-list">
                <ProfileInfoCard name="Pokédollars" image="/assets/icons/coin.png">
                    {`${pokedollars}$`}
                </ProfileInfoCard>

                <ProfileInfoCard name="Pokémon caught" image="/assets/icons/pokedex.png">
                    {ownedPokemons.length}
                </ProfileInfoCard>

                <ProfileInfoCard name="Total clics" image="/assets/icons/silph-scope.png">
                    {clic}
                </ProfileInfoCard>

                <ProfileInfoCard
                    name="Delete all"
                    image="/assets/icons/escape-rope.png"
                    onClick={handleOpenConfirm}
                    style={{ cursor: 'pointer' }}
                />
            </article>
        </section>

        {showConfirm && (
            <article className="modal-overlay">
            <article className="modal-content">
                <p>Are you sure you want to delete all your data?</p>
                <article>
                <button onClick={handleDeleteAll}>Yes</button>
                <button onClick={handleCloseConfirm}>No</button>
                </article>
            </article>
            </article>
        )}

        {isGameOver && (
            <section className="game-over-overlay">
                <article className="game-over-text">
                    <h2>GAME OVER</h2>
                </article>
            </section>
        )}
        </>
    );
}