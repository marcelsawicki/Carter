import { Component, input, signal } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private sessionService: SessionService, private accountService: AccountService, private router: Router) { } 
  
    // Logowanie użytkownika
    loginAs(username: string, password: string): void {
      const user: User = { login: username, password: password };      
      this.accountService.login(user).subscribe({
        next: (response) => {
          if (response.status === 200) {
            // Sukces — np. użytkownik zalogowany
          this.sessionService.setLogin(user.login || '');
          this.login.set(user.login || null);
          this.router.navigate(['/logged']);
          }
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
      this.accountService.logout().subscribe({
        next: () => {
          this.sessionService.clearLogin();
        },
        error: (err) => {
          console.error('Błąd wylogowania:', err);
        }
      })
    }
    
  ngOnInit(): void {
    // Przypisanie sygnału z serwisu w metodzie ngOnInit
    this.login = this.sessionService.login;
  }
}
