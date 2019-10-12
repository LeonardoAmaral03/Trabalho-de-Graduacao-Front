import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiScheduleService } from '../../../services/api-schedule.service';
import { ListSchedulesViewModel } from '../../../models/listSchedulesViewModel';
import { UpdateStatus } from '../../../models/updateStatus';
import { Status } from '../../../models/enum/enumStatus';

export interface DialogData {
  computerId: string;
  itemId: string;
  maintenanceId: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-list-schedules',
  templateUrl: './list-schedules.component.html',
  styleUrls: ['./list-schedules.component.scss']
})
export class ListSchedulesComponent implements OnInit {

  displayedColumns: string[] = [ 'status', 'computerName', 'itemName', 'maintenanceName', 'maintenanceDate', 'acao'];
  dataSource: ListSchedulesViewModel[];
  isLoadingResults = true;

  updateStatus: UpdateStatus;

  pending = Status.Pending;
  notAccomplished = Status.NotAccomplished;

  constructor(private _api: ApiScheduleService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getListSchedules();
  }

  getListSchedules() {
    this._api.getListSchedules()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  statusAccomplished(updateStatus: UpdateStatus) {
    this.isLoadingResults = true;
    this._api.statusAccomplished(updateStatus)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.getListSchedules();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  openDialog(computerId, itemId, maintenanceId, maintenanceDate): void {
    console.log(computerId, itemId, maintenanceId, maintenanceDate);
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogStatusAccomplished, {
      width: '500px',
      data: {cId: computerId, iId: itemId, mId: maintenanceId, mDate: maintenanceDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != null) {
        this.updateStatus = new UpdateStatus();
        this.updateStatus.computerId = result.cId;
        this.updateStatus.itemId = result.iId;
        this.updateStatus.maintenanceId = result.mId;
        this.updateStatus.maintenanceDate = result.mDate;

        this.statusAccomplished(this.updateStatus);
      }
      // this.animal = result;
    });
  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-status-accomplished',
  templateUrl: 'dialog-status-accomplished.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogStatusAccomplished {

constructor(
  public dialogRef: MatDialogRef<DialogStatusAccomplished>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
