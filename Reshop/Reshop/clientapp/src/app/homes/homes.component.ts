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
      name: 'Skrzynia',
      city: 'Juneau',
      photo: '/assets/woodenbox.jpg',
      availableUnits: 1,
      price: 50,
      currency: 'PLN'
    },
    {
      id: 3,
      name: 'Poidło',
      city: 'Juneau',
      photo: '/assets/poidlo.jpg',
      availableUnits: 1,
      price: 180,
      currency: 'PLN'
    },
    {
      id: 4,
      name: 'Karminik',
      city: 'Juneau',
      photo: '/assets/karmnik.jpg',
      availableUnits: 1,
      price: 100,
      currency: 'PLN'
    }
  ];
}
