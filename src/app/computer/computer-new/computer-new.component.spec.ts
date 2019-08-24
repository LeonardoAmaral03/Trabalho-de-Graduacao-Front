import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerNewComponent } from './computer-new.component';

describe('ComputerNewComponent', () => {
  let component: ComputerNewComponent;
  let fixture: ComponentFixture<ComputerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
