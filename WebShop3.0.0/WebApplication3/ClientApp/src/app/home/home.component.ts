import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public rolldice(dice:number) {
    let dicevalue = document.getElementById('dicevalue'+dice);
    dicevalue.innerHTML += (Math.floor(Math.random() * dice)+1).toString() + ', ';
  }
}
