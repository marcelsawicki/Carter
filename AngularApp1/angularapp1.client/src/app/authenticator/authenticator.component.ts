import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserClaim } from '../types/userClaims';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})
export class AuthenticatorComponent implements OnInit {
  private apiUrl = '/api/account'; // Adres API
  nameClaim: string = '';
  authenticated: boolean = false;
  logoutUrl: string = '';
  userClaims$: Observable<UserClaim[]> = new Observable<UserClaim[]>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.userClaims$ = this.getUserClaims();
    this.userClaims$.subscribe({
      next: (c) =>{
        let claim = c.find((claim) => claim.type === 'name');
        this.nameClaim = claim ? claim.value  : '';
        let logoutClaim = c.find((claim) => claim.type === 'bff:logout_url');
        this.logoutUrl = logoutClaim ? logoutClaim.value : '';
        this.authenticated = c.length > 0;
      },
    error: (err) => {
      console.error('Błąd podczas pobierania danych użytkownika:', err);
      this.nameClaim = '';
      this.logoutUrl = '';
      this.authenticated = false;
    }
  });
  }

  getUserClaims() {
    const httpOptions = {
      withCredentials: true,
    };

        const url = `${this.apiUrl}/getuserclaims`; // Tworzenie pełnego URL z ID
        return this.http.get<UserClaim[]>(url);
  }
}
