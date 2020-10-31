import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'all-boards-data',
  templateUrl: './all-boards.component.html'
})
export class AllBoardsComponent {
  public boards: Boards[];
  Router: Router

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Router = router;
    http.get<Boards[]>(baseUrl + 'allboards').subscribe(result => {
      this.boards = result;
    }, error => {
      console.error('przkierowanie' + error);
      this.Router.navigate(['/login-panel'])
    });
  }
}

interface Boards {
  id: number;
  name: string;
}
