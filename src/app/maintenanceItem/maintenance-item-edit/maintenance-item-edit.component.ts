import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMaintenanceItemService } from '../../../services/api-maintenance-item.service';
import { Maintenance } from 'src/models/maintenance';
import { MaintenanceItem } from 'src/models/maintenanceItem';
import { Status } from '../../../models/enum/enumStatus';

@Component({
  selector: 'app-maintenance-item-edit',
  templateUrl: './maintenance-item-edit.component.html',
  styleUrls: ['./maintenance-item-edit.component.scss']
})
export class MaintenanceItemEditComponent implements OnInit {

  _itemId: String = '';
  maintenanceItemForm: FormGroup;
  itemId: String = '';
  itemName: String = '';
  maintenanceId: String = '';
  period: String = '';
  status: Status = null;
  maintenanceName: String = '';
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiMaintenanceItemService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMaintenanceItem(this.route.snapshot.params.itemId, this.route.snapshot.params.maintenanceId); // TALVEZ FUNCIONE
    this.maintenanceItemForm = this.formBuilder.group({
      itemId : [null, Validators.required],
      maintenanceId : [null, Validators.required],
      period: [null, Validators.required],
      status: [null, Validators.required]
    });
  }

  getMaintenanceItem(itemId, maintenanceId) {
    this.api.getMaintenanceItem(itemId, maintenanceId).subscribe(data => {
      this._itemId = data.maintenanceItem.itemId;
      this.itemName = data.maintenanceItem.item.name,
      this.maintenanceName = data.maintenance.name,
      // this.selected = data.maintenances.find(maintenanceId); // talvez de errado
      // this.selectedStatus = data.maintenanceItem.status,  // talvez de errado
      this.maintenanceItemForm.setValue({
        itemId: data.maintenanceItem.itemId,
        maintenanceId: data.maintenanceItem.maintenanceId,
        period: data.maintenanceItem.period,
        status: data.maintenanceItem.status
      });
    });
  }

  updateItem(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateMaintenanceItem(this._itemId, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/item-detail/' + this._itemId]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
