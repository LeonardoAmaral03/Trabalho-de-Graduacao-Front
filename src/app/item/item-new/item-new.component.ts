import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiItemService } from '../../../services/api-item.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  itemForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiItemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      name : [null, Validators.required],
      brand : [null, Validators.required],
      model : [null, Validators.required],
      description : [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  addItem(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addItem(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/item-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
