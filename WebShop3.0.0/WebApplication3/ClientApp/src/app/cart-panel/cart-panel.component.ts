import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './cart-panel.component.html',
})
export class CartPanelComponent {
  public mylist: string[];
  constructor()
  {
    let mylist = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      mylist.push(value);
      this.mylist = mylist;
      console.log(key, value);
    }
  }
  public clearCart() {
    sessionStorage.clear();
    this.mylist = [];

    let cartCount = document.getElementById('lblCartCount');
    let incrementNumber = 0;
    cartCount.innerText = incrementNumber.toString();
  }
}
