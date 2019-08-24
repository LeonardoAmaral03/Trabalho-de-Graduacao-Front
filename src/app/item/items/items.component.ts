import { Component, OnInit } from '@angular/core';
import { ApiItemService } from '../../../services/api-item.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'brand', 'model', 'description', 'acao'];
  dataSource: Item[];
  isLoadingResults = true;

  constructor(private _api: ApiItemService) { }

  ngOnInit() {
    this._api.getItems()
    .subscribe(res => {
      this.dataSource = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
