import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiItemService } from '../../../services/api-item.service';
import { Item } from '../../../models/item';
import { MaintenanceItem } from '../../../models/maintenanceItem'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'period', 'acao'];
  item: Item = { id: '', name: '', brand: '', model: '', description: '' };
  dataSource: MaintenanceItem[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiItemService) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
    this.getMaintenaceItems(this.route.snapshot.params.id);
  }

  getItem(id) {
    this.api.getItem(id)
      .subscribe(data => {
        this.item = data;
        this.isLoadingResults = false;
      });
  }

  getMaintenaceItems(id) {
    this.api.GetMaintenanceItems(id)
      .subscribe(res => {
        this.dataSource = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteItem(id) {
    this.isLoadingResults = true;
    this.api.deleteItem(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/items']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  deleteMaintenanceItem(itemId, maintenanceId) {
    console.log(itemId);
    console.log(maintenanceId);
    this.isLoadingResults = true;
    this.api.deleteMaintenanceItem(itemId, maintenanceId)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.getMaintenaceItems(itemId);
          // this.router.navigate(['/items']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
