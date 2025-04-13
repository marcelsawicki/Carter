import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private sessionService: SessionService, private accountService: AccountService, private router: Router) {}

    loginAs(): void {
      const username = this.loginForm.value.login ?? '';
      const password = this.loginForm.value.password ?? '';
      //const data = { "login": "this.loginForm.value.login" , "Password": "this.loginForm.value.password"};

      const user: User = { login: username, password: password };      
      this.accountService.login(user).subscribe({
        next: (response) => {
          if (response.status === 200) {
            // Sukces — np. użytkownik zalogowany
            this.sessionService.setLogin(username);
          }
          //this.sessionService.setLogin(loggedInUser.login || '');
          this.router.navigate(['/logged']);
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
