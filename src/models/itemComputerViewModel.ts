import { Computer } from './computer';
import { Item } from './item';
import { ItemComputer } from './itemComputer';

export class ItemComputerViewModel {
    computer: Computer;
    items: Item[];
    itemComputers: ItemComputer[];
}
