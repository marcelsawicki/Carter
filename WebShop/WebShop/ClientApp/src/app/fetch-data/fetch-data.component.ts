import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  Router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Router = router;
    http.get<WeatherForecast[]>(baseUrl + 'home/test').subscribe(result => {
      this.forecasts = result;
    }, error => {
        console.error('przkierowanie' + error);
        this.Router.navigate(['/login-panel'])
    });
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
