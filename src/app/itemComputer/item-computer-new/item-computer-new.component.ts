import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiItemComputerService } from '../../../services/api-item-computer.service';
import { Item } from 'src/models/item';
import { ItemComputer } from 'src/models/itemComputer';
import { Computer } from 'src/models/computer';

@Component({
  selector: 'app-item-computer-new',
  templateUrl: './item-computer-new.component.html',
  styleUrls: ['./item-computer-new.component.scss']
})
export class ItemComputerNewComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'registrationDate', 'acao'];
  itemComputerForm: FormGroup;
  itemComputers: ItemComputer[];
  items: Item[];
  computer: Computer;
  selected: Item;
  isLoadingResults = false;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiItemComputerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getItemComputers(this.route.snapshot.params.id);

    this.itemComputerForm = this.formBuilder.group({
      computerId : [null, Validators.required],
      itemId : [null, Validators.required]
      // registrationDate : [null, Validators.required]
      // status : [null, Validators.required]
    });

    this.itemComputerForm.controls.computerId.setValue(this.route.snapshot.params.id);
  }

  getItemComputers(id) {
    this.api.getItemComputers(id)
      .subscribe(data => {
        this.computer = data.computer;
        this.items = data.items;
        this.itemComputers = data.itemComputers;
        this.isLoadingResults = false;
      });
  }

  addItemComputer(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addItemComputer(form)
      .subscribe(res => {
          const id = res.computerId;
          this.isLoadingResults = false;
          this.getItemComputers(id);
          // this.router.navigate(['/maintenance-item-new', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
