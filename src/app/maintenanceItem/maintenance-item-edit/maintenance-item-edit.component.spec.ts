import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceItemEditComponent } from './maintenance-item-edit.component';

describe('MaintenanceItemEditComponent', () => {
  let component: MaintenanceItemEditComponent;
  let fixture: ComponentFixture<MaintenanceItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
