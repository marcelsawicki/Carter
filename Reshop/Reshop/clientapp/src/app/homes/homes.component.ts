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
      state: 'CA',
      photo: '/assets/kawa.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 1,
      name: 'Gazeta',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/gazeta.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    }
  ];
}
