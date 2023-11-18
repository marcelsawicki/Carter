import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  _http: HttpClient;
  _baseUrl: string;
  applyForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router)
  {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async OnRegister(){
    
    this.applyForm.value.login ?? '',
    this.applyForm.value.password ?? '',

    await this._http.post<any>(this._baseUrl + 'api/account/register', {login: this.applyForm.value.login , password: this.applyForm.value.password}).subscribe(result => {
      if(result)
      {
        this.router.navigate(['/registered'])
      }
      else
      {
        alert("Not registered!");
      }
      
    }, error => console.error(error));
  }
}
