import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import Pokemart from './components/Pokemart';
import Backpack from './components/Backpack';
import Profile from './components/Profile';
import OverlayModal from './components/OverlayModal';
import Character from './components/Character';
import ActivePokemon from './components/ActivePokemon';

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activePokemon, setActivePokemon] = useState(null);

  useEffect(() => {
    const storedActive = localStorage.getItem('activePokemon');
    if (storedActive) setActivePokemon(JSON.parse(storedActive));
  }, []);

  const handleClose = () => {
      const clicAudio = new Audio('/assets/audio/sounds/click.mp3');
      clicAudio.play();
      setActiveMenu(null);
  };

  return (
    <section className="App">
      {/* <Home /> */}
      <Header />
      <Character />
      <ActivePokemon activePokemon={activePokemon} />
      
      <Menu active={activeMenu} onSelect={setActiveMenu} />

      <main>
        {activeMenu === 'pokedex' && (
          <OverlayModal onClose={handleClose}>
            <Pokedex onClose={handleClose} setActivePokemon={(pokemon) => {
                setActivePokemon(pokemon);
                localStorage.setItem('activePokemon', JSON.stringify(pokemon));
                setActiveMenu(null);
              }} />
          </OverlayModal>
        )}

        {activeMenu === 'pokemart' && (
          <OverlayModal onClose={handleClose}>
            <Pokemart onClose={handleClose} />
          </OverlayModal>
        )}

        {activeMenu === 'backpack' && (
          <OverlayModal onClose={handleClose}>
            <Backpack onClose={handleClose} />
          </OverlayModal>
        )}

        {activeMenu === 'profile' && (
          <OverlayModal onClose={handleClose}>
            <Profile onClose={handleClose} />
          </OverlayModal>
        )}
      </main>
    </section>
  );
}
