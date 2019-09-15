import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComputerNewComponent } from './item-computer-new.component';

describe('ItemComputerNewComponent', () => {
  let component: ItemComputerNewComponent;
  let fixture: ComponentFixture<ItemComputerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComputerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComputerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
