import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyShooterComponent } from './penalty-shooter.component';

describe('PenaltyShooterComponent', () => {
  let component: PenaltyShooterComponent;
  let fixture: ComponentFixture<PenaltyShooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenaltyShooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenaltyShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
