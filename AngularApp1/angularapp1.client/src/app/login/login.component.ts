import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private sessionService: SessionService, private accountService: AccountService) {}

    loginAs(): void {
      const username = this.loginForm.value.login ?? '';
      const password = this.loginForm.value.password ?? '';
      //const data = { "login": "this.loginForm.value.login" , "Password": "this.loginForm.value.password"};

      const user: User = { login: username, password: password };      
      this.accountService.login(user).subscribe({
        next: (loggedInUser) => {
          this.sessionService.setLogin(loggedInUser.login || '');
        },
        error: (err) => {
          console.error('Błąd logowania:', err);
        }
      });
    }

    // Wylogowanie użytkownika
    logout(): void {
      this.accountService.logout().subscribe({
        next: () => {
          this.sessionService.clearLogin();
        },
        error: (err) => {
          console.error('Błąd wylogowania:', err);
        }
      })
    }
 onSubmit() {    
  const login = this.loginForm.controls.login.value;
  this.loginAs();
  if(login){
    this.sessionService.setLogin(login);
  }
  }

}
