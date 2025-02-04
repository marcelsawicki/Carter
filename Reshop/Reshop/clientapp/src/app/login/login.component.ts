import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrl: 'login.component.css',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  _http: HttpClient;
  _baseUrl: string;
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async onSubmit() {
    
    this.loginForm.value.login ?? '';
    this.loginForm.value.password ?? '';
    const data = { "login": "this.loginForm.value.login" , "Password": "this.loginForm.value.password"};

    await this._http.post<any>('https://localhost:5001/api/account/login', data).subscribe(result => {
      console.log(result);
      if(result) {
        if(this.loginForm.value.login) {
          sessionStorage.setItem('userName',this.loginForm.value.login);
        }
        
        var userName = document.getElementById("user-name");
        
        if(userName && this.loginForm.value.login) {
          userName.setAttribute("value", this.loginForm.value.login)
        }

        this.router.navigate(['/logged'])
      } else { 
        alert("Wrong password, login or account is not activated!")
        this.router.navigate(['/login'])
      }
      
    }, error => {
      console.error(error); 
      return;
    })
    
  }


  async OnRegister(login:string, password:string) {
    await this._http.post<any>(this._baseUrl + 'api/account/register', {login: login, password:password}).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
