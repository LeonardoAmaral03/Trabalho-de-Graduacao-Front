import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiComputerService } from '../../../services/api-computer.service';

@Component({
  selector: 'app-computer-new',
  templateUrl: './computer-new.component.html',
  styleUrls: ['./computer-new.component.scss']
})
export class ComputerNewComponent implements OnInit {

  computerForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiComputerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.computerForm = this.formBuilder.group({
      name : [null, Validators.required],
      description : [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  addComputer(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addComputer(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/computer-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
