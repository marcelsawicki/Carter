import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  _http: HttpClient;
  _baseUrl: string;
  applyForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this._http = http;
    this._baseUrl = baseUrl;
    this.Logout();
  }

  async Logout() 
  {
    await this._http.get(this._baseUrl + 'api/account/logout').subscribe(result => {
      console.log(result);
    }, error => 
    {
      console.error(error);
      console.log("Pobieranie nie powiodło się.")
    });
  }
}
