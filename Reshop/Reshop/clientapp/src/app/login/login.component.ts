import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  _http: HttpClient;
  _baseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async OnSubmit(login:string, password:string){
    await this._http.post<any>(this._baseUrl + 'api/account/login', {login: login, password:password}).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
