import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenancesComponent } from './maintenance/maintenances/maintenances.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail/maintenance-detail.component';
import { MaintenanceNewComponent } from './maintenance/maintenance-new/maintenance-new.component';
import { MaintenanceEditComponent } from './maintenance/maintenance-edit/maintenance-edit.component';
import { ItemsComponent } from './item/items/items.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemNewComponent } from './item/item-new/item-new.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ComputersComponent } from './computer/computers/computers.component';
import { ComputerDetailComponent } from './computer/computer-detail/computer-detail.component';
import { ComputerNewComponent } from './computer/computer-new/computer-new.component';
import { ComputerEditComponent } from './computer/computer-edit/computer-edit.component';
import { MaintenanceItemNewComponent } from './maintenanceItem/maintenance-item-new/maintenance-item-new.component';
import { MaintenanceItemEditComponent } from './maintenanceItem/maintenance-item-edit/maintenance-item-edit.component';
import { ItemComputerNewComponent } from './itemComputer/item-computer-new/item-computer-new.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { ListSchedulesComponent } from './schedule/list-schedules/list-schedules.component'

const routes: Routes = [
  {
    path: 'maintenances',
    component: MaintenancesComponent,
    data: { title: 'Maintenance List' }
  },
  {
    path: 'maintenance-detail/:id',
    component: MaintenanceDetailComponent,
    data: { title: 'Maintenance Detail' }
  },
  {
    path: 'maintenance-new',
    component: MaintenanceNewComponent,
    data: { title: 'Add Maintenance' }
  },
  {
    path: 'maintenance-edit/:id',
    component: MaintenanceEditComponent,
    data: { title: 'Edit Maintenance' }
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: { title: 'Item List' }
  },
  {
    path: 'item-detail/:id',
    component: ItemDetailComponent,
    data: { title: 'Item Detail' }
  },
  {
    path: 'item-new',
    component: ItemNewComponent,
    data: { title: 'Add Item' }
  },
  {
    path: 'item-edit/:id',
    component: ItemEditComponent,
    data: { title: 'Edit Item' }
  },
  {
    path: 'computers',
    component: ComputersComponent,
    data: { title: 'Computer List' }
  },
  {
    path: 'computer-detail/:id',
    component: ComputerDetailComponent,
    data: { title: 'Computer Detail' }
  },
  {
    path: 'computer-new',
    component: ComputerNewComponent,
    data: { title: 'Add Computer' }
  },
  {
    path: 'computer-edit/:id',
    component: ComputerEditComponent,
    data: { title: 'Edit Computer' }
  },
  {
    path: '',
    // redirectTo: '/maintenances',
    redirectTo: '/list-schedule',
    pathMatch: 'full'
  },
  {
    path: 'maintenance-item-new/:id',
    component: MaintenanceItemNewComponent,
    data: { title: 'Add MaintenanceItem' }
  },
  {
    path: 'maintenance-item-edit/:itemId/:maintenanceId',
    component: MaintenanceItemEditComponent,
    data: { title: 'Edit MaintenanceItem' }
  },
  {
    path: 'item-computer-new/:id',
    component: ItemComputerNewComponent,
    data: { title: 'Add ItemComputer' }
  },
  {
    path: 'computer-schedule/:id',
    component: ScheduleComponent,
    data: { title: 'Computer Schedule' }
  },
  {
    path: 'list-schedule',
    component: ListSchedulesComponent,
    data: { title: 'List Schedules' }
  }
  // {
  //   path: 'computer-schedule/:id',
  //   component: ScheduleComponent,
  //   data: { title: 'Computer Schedule' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
