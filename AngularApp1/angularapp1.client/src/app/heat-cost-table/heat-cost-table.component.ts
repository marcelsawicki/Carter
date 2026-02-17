import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

interface HeatCost {
  source: string;
  cost: number;
}

@Component({
  selector: 'app-heat-cost-table',
  templateUrl: './heat-cost-table.component.html',
  styleUrl: './heat-cost-table.component.css'
})
export class HeatCostTableComponent {
  heatCosts: HeatCost[] = [
    { source: 'Pompa ciepła gruntowa', cost: 0.28 },
    { source: 'Pompa ciepła powietrzna', cost: 0.38 },
    { source: 'Grzejniki elektryczne', cost: 1.15 },
    { source: 'Gaz ziemny', cost: 0.38 },
    { source: 'Gaz LPG', cost: 0.34 },
    { source: 'Olej opałowy', cost: 0.51 },
    { source: 'Pelety drzewne', cost: 0.35 },
    { source: 'Drewno opałowe / kocioł zagazowujący', cost: 0.29 },
    { source: 'Drewno opałowe / kocioł tradycyjny', cost: 0.38 },
    { source: 'Węgiel kamienny', cost: 0.30 }
  ];
}
