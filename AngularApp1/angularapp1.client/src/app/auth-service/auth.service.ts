import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): Observable<boolean> {
    return this.http.get('/api/auth/check', { withCredentials: true })
      .pipe(
        map(_ => true),           // jeśli odpowiedź 200 OK → true
        catchError(_ => of(false)) // jeśli błąd (np. 401) → false
      );
  }
}