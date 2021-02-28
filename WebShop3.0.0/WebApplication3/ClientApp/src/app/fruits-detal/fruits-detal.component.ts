import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fruits-detal-data',
  templateUrl: './fruits-detal.component.html'
})
export class FruitsDetalComponent {
  public fruitdetal: Fruitdetail[];
  Router: Router;
  itemno: number = 1;
  private routeSub: Subscription;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router, private route: ActivatedRoute) {
    this.Router = router;
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.itemno = params['id'];

      http.get<Fruitdetail[]>(baseUrl + 'fruits/' + this.itemno).subscribe(result => {
        this.fruitdetal = result;
      }, error => {
        console.error(error);
      });

    });
    
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt(`OnInit`);
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.itemno = params['id'];
    });
  }

  logIt(msg: string) {
    console.log(`${msg}`);
  }
}

interface Fruitdetail {
  id: number;
  name: string;
  picture: string;
}

