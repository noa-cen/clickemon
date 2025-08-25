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
import { getPokedollar } from './services/pokedollar';
import { getActivePokemon, getExpActivePokemon } from "./services/pokemon";

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  
  const [activePokemon, setActivePokemon] = useState(() => getActivePokemon());

  const [pokedollar, setPokedollar] = useState(getPokedollar());
  const [exp, setExp] = useState(getExpActivePokemon(activePokemon.id));

  useEffect(() => {
    if (activePokemon) {
      setExp(getExpActivePokemon(activePokemon.id));
    }
  }, [activePokemon]);

  const handleClose = () => {
      const clicAudio = new Audio('/assets/audio/sounds/click.mp3');
      clicAudio.play();
      setActiveMenu(null);
  };

  return (
    <section className="App">
      {/* <Home /> */}
      <Header pokedollar={pokedollar} exp={exp} activePokemon={activePokemon} />
      <Character setPokedollar={setPokedollar} />
      <ActivePokemon activePokemon={activePokemon} setExp={setExp} />
      
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
            <Pokemart onClose={handleClose} setPokedollar={setPokedollar} />
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
