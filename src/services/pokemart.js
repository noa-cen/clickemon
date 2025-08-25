import { getPokedollar, setPokedollar, spendPokedollar } from "./pokedollar";

export function getInventory() {
    return JSON.parse(localStorage.getItem('inventory') || '{}');
}

export function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

export function buyItem(itemName, itemCost) {
    if (spendPokedollar(itemCost)) {
      const inventory = getInventory();
      const currentQty = inventory[itemName] || 0;
      inventory[itemName] = currentQty + 1;
      saveInventory(inventory);
      
      return { success: true, inventory };
    } else {
        return { success: false };
      }
}