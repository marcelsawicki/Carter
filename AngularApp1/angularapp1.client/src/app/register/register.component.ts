import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  applyForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  async OnRegister(){
    alert('Jeszcze nie działa rejestracja.');
  }
}
