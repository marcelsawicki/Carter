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
      var obj = JSON.parse(value);
      //mylist.push(obj.boardName);
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
  public orderCart() {
    console.log("Making order...")
  }

  public closeModalWindow() {
    let modalwindow1 = document.getElementById('modalwindow1');
    modalwindow1.hidden = true;
  }
  public openModalWindow() {
    let modalwindow1 = document.getElementById('modalwindow1');
    modalwindow1.hidden = false;
  }
  public saveChangesModalWindow() {
    let modalwindowmsg = document.getElementById('modalwindowmsg');
    modalwindowmsg.innerText = 'Not saved - in development.';
  }
  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    let modalwindow1 = document.getElementById('modalwindow1');
    modalwindow1.hidden = true;
  }
}
