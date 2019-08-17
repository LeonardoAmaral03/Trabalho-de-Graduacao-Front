import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMaintenanceService } from '../../../services/api-maintenance.service';

@Component({
  selector: 'app-maintenance-edit',
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.scss']
})
export class MaintenanceEditComponent implements OnInit {

  _id: String = '';
  maintenanceForm: FormGroup;
  id: String = '';
  name: String = '';
  activity: String = '';
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiMaintenanceService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.getMaintenance(this.route.snapshot.params.id);
      this.maintenanceForm = this.formBuilder.group({
        id : [null, Validators.required],
        name : [null, Validators.required],
        activity : [null, Validators.required]
    });
  }

  getMaintenance(id) {
    this.api.getMaintenance(id).subscribe(data => {
      this._id = data.id;
      this.maintenanceForm.setValue({
        id: data.id,
        name: data.name,
        activity: data.activity
      });
    });
  }

  updateMaintenance(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateMaintenance(this._id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/maintenance-detail/' + this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
