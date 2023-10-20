import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { HousingLocationComponent } from '../hausing-location/housing-location.component';
import { HousingLocation } from '../hausing-location/housinglocation';


@Component({
  selector: 'app-homes',
  standalone: true,
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
  imports: [HousingLocationComponent, CommonModule]
})

export class HomesComponent {

  housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Karminik',
      city: 'Wroclaw',
      photo: '/assets/karmnik.jpg',
      availableUnits: 120,
      price: 150,
      currency: 'PLN'
    },
    {
      id: 2,
      name: 'Schody',
      city: 'Wroclaw',
      photo: '/assets/schody.jpg',
      availableUnits: 4,
      price: 550,
      currency: 'PLN'
    },
  ];
}
