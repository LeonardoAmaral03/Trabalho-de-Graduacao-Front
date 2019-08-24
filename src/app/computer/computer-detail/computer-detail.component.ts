import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiComputerService } from '../../../services/api-computer.service';
import { Computer } from '../../../models/computer';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit {

  computer: Computer = { id: '', name: '', description: '' };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiComputerService) { }

  ngOnInit() {
    this.getComputer(this.route.snapshot.params.id);
  }

  getComputer(id) {
    this.api.getComputer(id)
      .subscribe(data => {
        this.computer = data;
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

}
