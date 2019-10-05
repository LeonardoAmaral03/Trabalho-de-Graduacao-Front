import { Status } from './enum/enumStatus';

export class ListSchedulesViewModel {
    computerName: string;
    itemName: string;
    maintenanceName: string;
    status: Status;
    maintenanceDate: Date;
}
