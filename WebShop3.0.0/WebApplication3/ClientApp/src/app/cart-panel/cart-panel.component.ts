import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './cart-panel.component.html',
})
export class CartPanelComponent {
  public mylist: Articles[];
  public articles: Articles[];
  public totalZK: number;
  public totalSS: number;
  public totalP: number;
  constructor()
  {
    let mylist = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      mylist.push(prettyArticle);
      this.mylist = mylist;
      console.log(key, value);
    }  
  }
  public calculateTotalZK(): number {
    let totalZZZ: number = 0;;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalZZZ += prettyArticle.priceZK;
    }
    return totalZZZ;
  }

  public calculateTotalSS(): number {
    let totalSSS: number=0;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalSSS += prettyArticle.priceSS;
    }
    return totalSSS;
  }

  public calculateTotalP(): number {
    let totalPPP: number=0;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalPPP += prettyArticle.priceP;
    }
    return totalPPP;
  }

  public clearCart() {
    sessionStorage.clear();
    this.mylist = [];

    let cartCount = document.getElementById('lblCartCount');
    let incrementNumber = 0;
    cartCount.innerText = incrementNumber.toString();
    this.totalZK = 0;
    this.totalSS = 0;
    this.totalP = 0;
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
    this.totalZK = this.calculateTotalZK();
    this.totalSS = this.calculateTotalSS();
    this.totalP = this.calculateTotalP();
  }
}

interface Articles {
  id: number;
  price: number;
  priceZK: number;
  priceSS: number;
  priceP: number;
  name: string;
}
