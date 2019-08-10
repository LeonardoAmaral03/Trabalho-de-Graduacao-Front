import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceNewComponent } from './maintenance-new.component';

describe('MaintenanceNewComponent', () => {
  let component: MaintenanceNewComponent;
  let fixture: ComponentFixture<MaintenanceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
