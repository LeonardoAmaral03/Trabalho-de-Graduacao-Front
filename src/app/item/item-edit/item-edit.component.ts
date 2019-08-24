import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiItemService } from '../../../services/api-item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  _id: String = '';
  itemForm: FormGroup;
  id: String = '';
  name: String = '';
  brand: String = '';
  model: String = '';
  description: String = '';
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiItemService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
    this.itemForm = this.formBuilder.group({
      id : [null, Validators.required],
      name : [null, Validators.required],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      description : [null, Validators.required]
    });
  }

  getItem(id) {
    this.api.getItem(id).subscribe(data => {
      this._id = data.id;
      this.itemForm.setValue({
        id: data.id,
        name: data.name,
        brand: data.brand,
        model: data.model,
        description: data.description
      });
    });
  }

  updateItem(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateItem(this._id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/item-detail/' + this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
