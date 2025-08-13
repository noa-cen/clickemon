import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

export default function Home({ onFinish }) {
  return (
    <section className="home">
        <img src='public/assets/icons/logo.png' alt='logo' className='logo' />
        <h1>Clickémon</h1>
        <button className="start-btn" onClick={onFinish}>
            Start
        </button>
        <article className='home-pokemon'>
            <img src='/assets/images/pokemon/Charmander - 4.png' alt='Charmander' className='pokemon' />
            <img src='/assets/images/pokemon/Bulbasaur - 1.png' alt='Bulbasaur' className='pokemon' />
            <img src='/assets/images/pokemon/Squirtle - 7.png' alt='Squirtle' className='pokemon' />
        </article>
    </section>
  );
}
