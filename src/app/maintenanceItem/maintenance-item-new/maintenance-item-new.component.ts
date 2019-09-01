import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiMaintenanceItemService } from '../../../services/api-maintenance-item.service';
import { Maintenance } from 'src/models/maintenance';
import { MaintenanceItem } from 'src/models/maintenanceItem';
import { Item } from 'src/models/item';
import { MaintenanceItemViewModel } from 'src/models/maintenanceItemViewModel';
import { Status } from '../../../models/enum/enumStatus';

@Component({
  selector: 'app-maintenance-item-new',
  templateUrl: './maintenance-item-new.component.html',
  styleUrls: ['./maintenance-item-new.component.scss']
})
export class MaintenanceItemNewComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'period', 'status', 'acao'];
  maintenanceItemForm: FormGroup;
  maintenanceItems: MaintenanceItem[];
  maintenances: Maintenance[];
  item: Item;
  selected: Maintenance;
  isLoadingResults = false;

  selectedStatus: Status = Status.Pending;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiMaintenanceItemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getIMaintenanceItem(this.route.snapshot.params.id);

    this.maintenanceItemForm = this.formBuilder.group({
      itemId : [null, Validators.required],
      maintenanceId : [null, Validators.required],
      period : [null, Validators.required],
      status : [null, Validators.required]
    });

    this.maintenanceItemForm.controls.itemId.setValue(this.route.snapshot.params.id);
  }

  getIMaintenanceItem(id) {
    this.api.getIMaintenanceItem(id)
      .subscribe(data => {
        this.item = data.item;
        this.maintenances = data.maintenances;
        this.maintenanceItems = data.maintenanceItems;
        this.isLoadingResults = false;
      });
  }

  addMaintenanceItem(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addMaintenanceItem(form)
      .subscribe(res => {
          const id = res.itemId;
          this.isLoadingResults = false;
          this.getIMaintenanceItem(id);
          // this.router.navigate(['/maintenance-item-new', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
