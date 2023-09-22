import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html'
})
export class LoggedComponent {
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
  }
}
