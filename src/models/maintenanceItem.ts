// import { Status } from './enum/enumStatus';
import { Item } from './item';
import { Maintenance } from './maintenance';

export class MaintenanceItem {
    period: number;
    // status: Status;
    itemId: string;
    item: Item;
    maintenanceId: string;
    maintenance: Maintenance;
}
