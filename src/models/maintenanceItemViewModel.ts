import { Item } from './Item';
import { Maintenance } from './Maintenance';
import { MaintenanceItem } from './MaintenanceItem';

export class MaintenanceItemViewModel {
    item: Item;
    maintenances: Maintenance[];
    maintenanceItems: MaintenanceItem[];
}
