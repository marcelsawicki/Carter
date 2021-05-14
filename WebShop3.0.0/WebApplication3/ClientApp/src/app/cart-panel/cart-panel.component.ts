import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './cart-panel.component.html',
})
export class CartPanelComponent {
  public mylist: Articles[];
  public articles: Articles[];
  public totalEUR: number;
  public totalUSD: number;
  public totalPLN: number;
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
  public calculateTotalEUR(): number {
    let totalZZZ: number = 0;;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalZZZ += prettyArticle.priceUSD;
    }
    return totalZZZ;
  }

  public calculateTotalUSD(): number {
    let totalSSS: number=0;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalSSS += prettyArticle.priceEUR;
    }
    return totalSSS;
  }

  public calculateTotalPLN(): number {
    let totalPPP: number=0;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      let obj = JSON.parse(value);
      let prettyArticle: Articles = obj as Articles;
      totalPPP += prettyArticle.pricePLN;
    }
    return totalPPP;
  }

  public clearCart() {
    sessionStorage.clear();
    this.mylist = [];

    let cartCount = document.getElementById('lblCartCount');
    let incrementNumber = 0;
    cartCount.innerText = incrementNumber.toString();
    this.totalEUR = 0;
    this.totalUSD = 0;
    this.totalPLN = 0;
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
    this.totalEUR = this.calculateTotalEUR();
    this.totalUSD = this.calculateTotalUSD();
    this.totalPLN = this.calculateTotalPLN();
  }
}

interface Articles {
  id: number;
  price: number;
  priceEUR: number;
  priceUSD: number;
  pricePLN: number;
  name: string;
}
