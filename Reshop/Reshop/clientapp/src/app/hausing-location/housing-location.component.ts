import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location"> Lokalizacja: {{ housingLocation.city}}</p>
    <p class="listing-location"> Dostępnych: {{ housingLocation.availableUnits }} szt.</p>
    <p class="listing-location"> Cena: {{ housingLocation.price }} {{ housingLocation.currency }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
