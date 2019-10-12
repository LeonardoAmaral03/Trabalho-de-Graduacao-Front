import { Status } from './enum/enumStatus';

export class ListSchedulesViewModel {
    computerId: string;
    computerName: string;
    itemId: string;
    itemName: string;
    maintenanceId: string;
    maintenanceName: string;
    status: Status;
    maintenanceDate: Date;
}
