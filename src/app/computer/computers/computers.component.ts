import { Component, OnInit } from '@angular/core';
import { ApiComputerService } from '../../../services/api-computer.service';
import { Computer } from '../../../models/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'description', 'acao'];
  dataSource: Computer[];
  isLoadingResults = true;

  constructor(private _api: ApiComputerService) { }

  ngOnInit() {
    this._api.getComputers()
    .subscribe(res => {
      this.dataSource = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
