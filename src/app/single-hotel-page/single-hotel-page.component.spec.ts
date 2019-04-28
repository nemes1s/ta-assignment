import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHotelPageComponent } from './single-hotel-page.component';

describe('SingleHotelPageComponent', () => {
  let component: SingleHotelPageComponent;
  let fixture: ComponentFixture<SingleHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
