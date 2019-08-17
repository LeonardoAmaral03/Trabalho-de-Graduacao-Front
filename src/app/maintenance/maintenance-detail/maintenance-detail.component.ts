import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiMaintenanceService } from '../../../services/api-maintenance.service';
import { Maintenance } from '../../../models/maintenance';

@Component({
  selector: 'app-maintenance-detail',
  templateUrl: './maintenance-detail.component.html',
  styleUrls: ['./maintenance-detail.component.scss']
})
export class MaintenanceDetailComponent implements OnInit {

  maintenance: Maintenance = { id: '', name: '', activity: '' };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiMaintenanceService) { }

  ngOnInit() {
    this.getMaintenance(this.route.snapshot.params.id);
  }

  getMaintenance(id) {
    this.api.getMaintenance(id)
      .subscribe(data => {
        this.maintenance = data;
        this.isLoadingResults = false;
      });
  }

  deleteMaintenance(id) {
    this.isLoadingResults = true;
    this.api.deleteMaintenance(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/maintenances']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
