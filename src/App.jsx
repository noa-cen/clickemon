import React, { useState } from 'react';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import Pokemart from './components/Pokemart';
import Backpack from './components/Backpack';
import Profile from './components/Profile';
import OverlayModal from './components/OverlayModal';
import Character from './components/Character';
import Pokemon from './components/Pokemon';

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClose = () => {
      const clicAudio = new Audio('/assets/audio/sounds/click.mp3');
      clicAudio.play();
      setActiveMenu(null);
  };

  return (
    <section className="App">
      <Character />
      <Pokemon />
      
      <Menu active={activeMenu} onSelect={setActiveMenu} />

      <main>
        {activeMenu === 'pokedex' && (
          <OverlayModal onClose={handleClose}>
            <Pokedex onClose={handleClose} />
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
