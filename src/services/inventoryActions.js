// Fonction commune et générale: useItem puis une fonction par item et effets




// import { getInventory, saveInventory } from './pokemart';

// export function useItem(itemName) {
//     const inventory = getInventory();

//     if (!inventory[itemName] || inventory[itemName] <= 0) {
//         console.warn(`No ${itemName} left in inventory.`);
//         return { success: false, message: 'Item not available' };
//     }

//     inventory[itemName] -= 1;
//     if (inventory[itemName] === 0) {
//         delete inventory[itemName];
//     }
//     saveInventory(inventory);

//     // Applique l'effet de l'objet
//     switch (itemName) {
//         case 'Pokéflute':
//         // logique : soigner le Pokémon actif
//         console.log('Potion utilisée : +20 HP');
//         return { success: true, message: 'Healed active Pokémon by 20 HP' };

//         case 'Rod':
//         // logique : tenter de capturer un Pokémon
//         console.log('Poké Ball lancée !');
//         return { success: true, message: 'Attempted capture' };

//         case 'Potion':
//         // logique : faire évoluer un Pokémon
//         console.log('Évolution déclenchée !');
//         return { success: true, message: 'Triggered evolution' };

//         case 'Super potion':
//         // logique : changer la musique de fond
//         const audio = new Audio('/assets/audio/music/route1.mp3');
//         audio.play();
//         return { success: true, message: 'Playing Route 1 theme' };

//         case 'Hyper potion':

//         case 'Max potion':

//         case 'Golden nugget':

//         case 'Rare candy':

//         case 'Leaf stone':

//         case 'Thunder stone':

//         case 'Water stone':

//         case 'Moon stone':

//         case 'Fire stone':

//         case 'Linking cord':

//         default:
//         console.warn(`No effect defined for item: ${itemName}`);
//         return { success: false, message: 'No effect' };
//     }
// }


// // inventoryActions.js

// export function useItem(itemName, context) {
//   const inventory = getInventory();

//   if (!inventory[itemName] || inventory[itemName] <= 0) {
//     return { success: false, message: 'Item not available' };
//   }

//   inventory[itemName] -= 1;
//   if (inventory[itemName] <= 0) delete inventory[itemName];
//   saveInventory(inventory);

//   // Appelle la bonne fonction
//   switch (itemName) {
//     case 'Golden nugget':
//       return useGoldenNugget(context);
//     case 'Leaf stone':
//       return useLeafStone(context);
//     case 'Rare candy':
//       return useRareCandy(context);
//     // ...
//     default:
//       return { success: false, message: 'No effect defined for this item' };
//   }
// }

// export function useGoldenNugget({ setPokedollars }) {
//   setPokedollars(prev => prev + 5000);
//   return { success: true, message: '+5000$' };
// }

// export function useLeafStone({ activePokemon, evolvePokemon }) {
//   if (activePokemon.name === 'Pikachu') {
//     evolvePokemon('Raichu');
//     return { success: true, message: 'Pikachu evolved into Raichu!' };
//   }
//   return { success: false, message: 'This Pokémon can’t evolve with Leaf Stone' };
// }

// export function useRareCandy({ levelUpActivePokemon }) {
//   levelUpActivePokemon(1);
//   return { success: true, message: 'Level +1' };
// }
