import { Component, OnInit } from '@angular/core';
import { ApiMaintenanceService } from '../../../services/api-maintenance.service';
import { Maintenance } from 'src/models/maintenance';

@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.scss']
})
export class MaintenancesComponent implements OnInit {

  displayedColumns: string[] = [ 'nome', 'atividade'];
  dataSource: Maintenance[];
  isLoadingResults;

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
