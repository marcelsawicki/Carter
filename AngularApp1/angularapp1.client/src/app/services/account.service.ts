import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = '/api/account'; 

  constructor(private http: HttpClient) { }
  
  login(user: User): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/login`; 
    return this.http.post<User>(url, user, { withCredentials: true, observe: 'response' }); // Poprawiona ścieżka
  }

  logout(): Observable<void> { // Nie wymaga parametru user
    const url = `${this.apiUrl}/logout`;
    return this.http.post<void>(url, {}); // Zmiana metody na POST (często stosowane przy wylogowaniu)
  }
}
