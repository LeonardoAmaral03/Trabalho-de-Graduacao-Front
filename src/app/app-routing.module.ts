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
    path: '',
    redirectTo: '/maintenances',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
