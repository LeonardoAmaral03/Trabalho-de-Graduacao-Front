import { Component, OnInit } from '@angular/core';
import { ApiMaintenanceService } from '../../../services/api-maintenance.service';
import { Maintenance } from '../../../models/maintenance';

@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.scss']
})
export class MaintenancesComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'activity'];
  dataSource: Maintenance[];
  isLoadingResults = true;

  constructor(private _api: ApiMaintenanceService) { }

  ngOnInit() {
    this._api.getMaintenances()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
