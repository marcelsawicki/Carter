import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent {
  constructor() {
    let userNameValue = sessionStorage.getItem('userName');
    var userName = document.getElementById("user-name");
  
    if(userName && userNameValue) {
      userName.setAttribute("value", userNameValue)
    }
  }
  
}
