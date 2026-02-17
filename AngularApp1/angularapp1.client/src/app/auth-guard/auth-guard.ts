import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../auth-service/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.isLoggedIn().pipe(
      tap(isAuth => {
        if (!isAuth) this.router.navigate(['/login']);
      })
    );
  }
}