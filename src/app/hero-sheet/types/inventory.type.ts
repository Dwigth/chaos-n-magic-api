import { InventoryItem } from "app/hero-sheet/types/inventory-item.type";

export type Inventory = {
    coins: number;
    items: InventoryItem[];
    carriedWeight: number;
}