import React, { useState } from 'react';
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import Pokemart from './components/Pokemart';
import OverlayModal from './components/OverlayModal';

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClose = () => setActiveMenu(null);

  return (
    <div className="App">
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
      </main>
    </div>
  );
}
