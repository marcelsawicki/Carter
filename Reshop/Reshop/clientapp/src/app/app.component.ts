import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import 'zone.js/dist/zone';  // Required for Stackblitz
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'clientapp';
    // Just enough here for the template to compile
    pageTitle = 'Datacrafter';

    cartCount = 0;
}