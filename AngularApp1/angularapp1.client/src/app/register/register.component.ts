import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  applyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      login: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required], 
      confirmpassword: ['', Validators.required]
    });

}
  sendRegistrationEmail = signal(false);

  async OnRegister(){
    if (this.applyForm.valid) {
      this.sendRegistrationEmail.set(true)
    } else {
      console.log('Form errors:', this.applyForm.errors);
      console.log('Form is invalid');
    }
  }
}
