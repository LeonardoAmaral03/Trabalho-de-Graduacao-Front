import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceItemNewComponent } from './maintenance-item-new.component';

describe('MaintenanceItemNewComponent', () => {
  let component: MaintenanceItemNewComponent;
  let fixture: ComponentFixture<MaintenanceItemNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceItemNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
