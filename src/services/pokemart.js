export function getInventory() {
    return JSON.parse(localStorage.getItem('inventory') || '{}');
}

export function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

export function buyItem(itemName, itemCost) {
    var pokedollars = parseInt(localStorage.getItem('pokedollars')) || 0;

    if (itemCost <= pokedollars) {
          pokedollars -= itemCost
          localStorage.setItem('pokedollars', pokedollars);

          const inventory = getInventory();
          const currentQty = inventory[itemName] || 0;
          inventory[itemName] = currentQty + 1;
          saveInventory(inventory);

          // Trigger a custom event to notify other components
        window.dispatchEvent(new Event('pokedollarsUpdate'));

          return { success: true, inventory };
    } else {
      return { success: false };
    }
}