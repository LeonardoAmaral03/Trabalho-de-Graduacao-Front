import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiItemService } from '../../../services/api-item.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item = { id: '', name: '', brand: '', model: '', description: '' };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiItemService) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
  }

  getItem(id) {
    this.api.getItem(id)
      .subscribe(data => {
        this.item = data;
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

}
