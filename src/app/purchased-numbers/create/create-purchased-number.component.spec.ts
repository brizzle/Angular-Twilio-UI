import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurchasedNumberComponent } from './create-purchased-number.component';

describe('CreatePurchasedNumberComponent', () => {
  let component: CreatePurchasedNumberComponent;
  let fixture: ComponentFixture<CreatePurchasedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePurchasedNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurchasedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
