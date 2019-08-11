import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenancesComponent } from './maintenance/maintenances/maintenances.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail/maintenance-detail.component';
import { MaintenanceNewComponent } from './maintenance/maintenance-new/maintenance-new.component';
import { MaintenanceEditComponent } from './maintenance/maintenance-edit/maintenance-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/maintenances',
    pathMatch: 'full'
  },
  {path: 'maintenance', children: [
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
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
