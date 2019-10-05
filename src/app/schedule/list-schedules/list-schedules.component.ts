import { Component, OnInit } from '@angular/core';
import { ApiScheduleService } from '../../../services/api-schedule.service';
import { ListSchedulesViewModel } from '../../../models/ListSchedulesViewModel';
import { Status } from '../../../models/enum/enumStatus'

@Component({
  selector: 'app-list-schedules',
  templateUrl: './list-schedules.component.html',
  styleUrls: ['./list-schedules.component.scss']
})
export class ListSchedulesComponent implements OnInit {

  displayedColumns: string[] = [ 'status', 'computerName', 'itemName', 'maintenanceName', 'maintenanceDate', 'acao'];
  dataSource: ListSchedulesViewModel[];
  isLoadingResults = true;

  pending = Status.Pending;
  notAccomplished = Status.NotAccomplished;

  constructor(private _api: ApiScheduleService) { }

  ngOnInit() {
    this._api.getListSchedules()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      console.log(this.pending);
      console.log(this.notAccomplished);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
