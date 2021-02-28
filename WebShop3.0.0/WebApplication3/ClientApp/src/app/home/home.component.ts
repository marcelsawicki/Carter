import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public closeModalWindow() {
    let modalwindow1 = document.getElementById('modalwindow1');
    modalwindow1.hidden = true;
  }
  public openModalWindow() {
    let modalwindow1 = document.getElementById('modalwindow1');
    modalwindow1.hidden = false;
  }
  public saveChangesModalWindow() {
    let modalwindowmsg = document.getElementById('modalwindowmsg');
    modalwindowmsg.innerText = 'Not saved - in development.';
  }
}
