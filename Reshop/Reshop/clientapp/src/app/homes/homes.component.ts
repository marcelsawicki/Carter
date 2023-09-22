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
      id: 0,
      name: 'Kawa',
      city: 'Santa Monica',
      photo: '/assets/kawa.jpg',
      availableUnits: 0,
      price: 2,
      currency: 'PLN'
    },
    {
      id: 1,
      name: 'Skrzynia',
      city: 'Juneau',
      photo: '/assets/gazeta.jpg',
      availableUnits: 1,
      price: 5,
      currency: 'PLN'
    },
    {
      id: 3,
      name: 'Poidło',
      city: 'Juneau',
      photo: '/assets/gazeta.jpg',
      availableUnits: 1,
      price: 7,
      currency: 'PLN'
    },
    {
      id: 4,
      name: 'Karminik',
      city: 'Juneau',
      photo: '/assets/gazeta.jpg',
      availableUnits: 1,
      price: 5,
      currency: 'PLN'
    }
  ];
}
