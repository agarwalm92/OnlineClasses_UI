import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricingplan } from './pricingplan';

describe('Pricingplan', () => {
  let component: Pricingplan;
  let fixture: ComponentFixture<Pricingplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricingplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricingplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
