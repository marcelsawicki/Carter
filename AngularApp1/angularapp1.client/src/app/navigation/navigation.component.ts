import { Component, input, signal } from '@angular/core';
import { SessionService } from '../services/session.service';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  loginprompt = input('Login');
  login = signal<string | null>(null); // Inicjalizacja sygnału
  constructor(private sessionService: SessionService, private accountService: AccountService) { } 
  
    // Logowanie użytkownika
    loginAs(username: string, password: string): void {
      const user: User = { login: username, password: password };      
      this.accountService.login(user).subscribe({
        next: (loggedInUser) => {
          this.sessionService.setLogin(loggedInUser.login || '');
          this.login.set(loggedInUser.login || null);
        },
        error: (err) => {
          console.error('Błąd logowania:', err);
        }
      });
    }
  
    // Wylogowanie użytkownika
    logout(): void {
      this.sessionService.clearLogin();
      this.login.set(null);
    }
    
  ngOnInit(): void {
    // Przypisanie sygnału z serwisu w metodzie ngOnInit
    this.login = this.sessionService.login;
  }
}
