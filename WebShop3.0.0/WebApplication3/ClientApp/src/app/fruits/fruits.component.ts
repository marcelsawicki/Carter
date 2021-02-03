import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'fruits-data',
  templateUrl: './fruits.component.html'
})
export class FruitsComponent {
  public boards: Boards[];
  Router: Router

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Router = router;
    http.get<Boards[]>(baseUrl + 'fruits').subscribe(result => {
      this.boards = result;
    }, error => {
      console.error('przkierowanie' + error);
      this.Router.navigate(['/login-panel'])
    });
  }
  public buyProcess() {
    console.log("Buying begin");
    let cartCount = document.getElementById('lblCartCount');
    let incrementNumber = parseInt(cartCount.innerText) + 1;
    cartCount.innerText = incrementNumber.toString();
  }
}

interface Boards {
  id: number;
  name: string;
}
