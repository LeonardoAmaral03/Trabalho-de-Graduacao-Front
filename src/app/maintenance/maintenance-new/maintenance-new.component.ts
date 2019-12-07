import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMaintenanceService } from '../../../services/api-maintenance.service';

@Component({
  selector: 'app-maintenance-new',
  templateUrl: './maintenance-new.component.html',
  styleUrls: ['./maintenance-new.component.scss']
})
export class MaintenanceNewComponent implements OnInit {

  maintenanceForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiMaintenanceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.maintenanceForm = this.formBuilder.group({
      name : [null, Validators.required],
      activity : [null, [Validators.required]]
    });
  }

  addMaintenance(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addMaintenance(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/maintenance-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
