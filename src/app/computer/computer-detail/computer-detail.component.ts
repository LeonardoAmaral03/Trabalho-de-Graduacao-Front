import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiComputerService } from '../../../services/api-computer.service';
import { Computer } from '../../../models/computer';
import { ItemComputer } from '../../../models/itemComputer';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'registrationDate', 'acao'];
  computer: Computer = { id: '', name: '', description: '' };
  dataSource: ItemComputer[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiComputerService) { }

  ngOnInit() {
    this.getComputer(this.route.snapshot.params.id);
    this.getItemComputers(this.route.snapshot.params.id);
  }

  getComputer(id) {
    this.api.getComputer(id)
      .subscribe(data => {
        this.computer = data;
        this.isLoadingResults = false;
      });
  }

  getItemComputers(id) {
    this.api.GetItemComputers(id)
      .subscribe(res => {
        this.dataSource = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteComputer(id) {
    this.isLoadingResults = true;
    this.api.deleteComputer(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/computers']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  deleteItemComputer(computerId, itemId) {
    console.log(computerId);
    console.log(itemId);
    this.isLoadingResults = true;
    this.api.deleteItemComputer(computerId, itemId)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.getItemComputers(computerId);
          // this.router.navigate(['/items']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
