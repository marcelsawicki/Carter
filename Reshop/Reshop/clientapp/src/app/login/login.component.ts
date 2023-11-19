import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
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

  async SubmitApplication(){
    
    this.applyForm.value.login ?? '',
    this.applyForm.value.password ?? '',

    await this._http.post<any>(this._baseUrl + 'api/account/login', {login: this.applyForm.value.login , password: this.applyForm.value.password}).subscribe(result => {
      console.log(result);
      if(result)
      {
        if(this.applyForm.value.login)
        {
          sessionStorage.setItem('userName',this.applyForm.value.login);
        }
        
        var userName = document.getElementById("user-name");
        
        if(userName && this.applyForm.value.login)
        {
          userName.setAttribute("value", this.applyForm.value.login)
        }

        this.router.navigate(['/logged'])
      }
      else
      { 
        alert("Wrong password, login or account is not activated!")
        this.router.navigate(['/login'])
      }
      
    }, error => console.error(error));
  }


  async OnRegister(login:string, password:string){
    await this._http.post<any>(this._baseUrl + 'api/account/register', {login: login, password:password}).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
