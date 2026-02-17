import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatCostTableComponent } from './heat-cost-table.component';

describe('HeatCostTableComponent', () => {
  let component: HeatCostTableComponent;
  let fixture: ComponentFixture<HeatCostTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatCostTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatCostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
