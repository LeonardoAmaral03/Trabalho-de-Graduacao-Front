import '../../src/polyfills';

import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenancesComponent } from './maintenance/maintenances/maintenances.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail/maintenance-detail.component';
import { MaintenanceNewComponent } from './maintenance/maintenance-new/maintenance-new.component';
import { MaintenanceEditComponent } from './maintenance/maintenance-edit/maintenance-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/menu/menu.component';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { LayoutModule } from '@angular/cdk/layout';
import { ItemsComponent } from './item/items/items.component';
import { ItemNewComponent } from './item/item-new/item-new.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ComputersComponent } from './computer/computers/computers.component';
import { ComputerNewComponent } from './computer/computer-new/computer-new.component';
import { ComputerEditComponent } from './computer/computer-edit/computer-edit.component';
import { ComputerDetailComponent } from './computer/computer-detail/computer-detail.component';
import { MaintenanceItemNewComponent } from './maintenanceItem/maintenance-item-new/maintenance-item-new.component';
import { MaintenanceItemEditComponent } from './maintenanceItem/maintenance-item-edit/maintenance-item-edit.component';
import { ItemComputerNewComponent } from './itemComputer/item-computer-new/item-computer-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenancesComponent,
    MaintenanceDetailComponent,
    MaintenanceNewComponent,
    MaintenanceEditComponent,
    MenuComponent,
    ItemsComponent,
    ItemNewComponent,
    ItemEditComponent,
    ItemDetailComponent,
    ComputersComponent,
    ComputerNewComponent,
    ComputerEditComponent,
    ComputerDetailComponent,
    MaintenanceItemNewComponent,
    MaintenanceItemEditComponent,
    ItemComputerNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
