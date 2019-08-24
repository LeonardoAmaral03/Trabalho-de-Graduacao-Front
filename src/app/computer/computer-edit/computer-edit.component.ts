import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiComputerService } from '../../../services/api-computer.service';

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.scss']
})
export class ComputerEditComponent implements OnInit {

  _id: String = '';
  computerForm: FormGroup;
  id: String = '';
  name: String = '';
  description: String = '';
  isLoadingResults = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiComputerService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getComputer(this.route.snapshot.params.id);
    this.computerForm = this.formBuilder.group({
      id : [null, Validators.required],
      name : [null, Validators.required],
      description : [null, Validators.required]
    });
  }

  getComputer(id) {
    this.api.getComputer(id).subscribe(data => {
      this._id = data.id;
      this.computerForm.setValue({
        id: data.id,
        name: data.name,
        description: data.description
      });
    });
  }

  updateComputer(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateComputer(this._id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/computer-detail/' + this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
