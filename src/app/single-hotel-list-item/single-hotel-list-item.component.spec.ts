import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHotelListItemComponent } from './single-hotel-list-item.component';

describe('SingleHotelListItemComponent', () => {
  let component: SingleHotelListItemComponent;
  let fixture: ComponentFixture<SingleHotelListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHotelListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHotelListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
