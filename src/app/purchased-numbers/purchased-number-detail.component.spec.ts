import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedNumberDetailComponent } from './purchased-number-detail.component';

describe('PurchasedNumberDetailComponent', () => {
  let component: PurchasedNumberDetailComponent;
  let fixture: ComponentFixture<PurchasedNumberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedNumberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedNumberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
