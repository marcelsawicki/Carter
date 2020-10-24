import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  constructor(private router: Router) {
  }

  public loginProcess() {
    console.log("Login begin");
    this.router.navigate(['/cart-panel'])
  }
}
