import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
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
