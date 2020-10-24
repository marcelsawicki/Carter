import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'all-boards-data',
  templateUrl: './all-boards.component.html'
})
export class AllBoardsComponent {
  public boards: Boards[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Boards[]>(baseUrl + 'allboards').subscribe(result => {
      this.boards = result;
    }, error => console.error(error));
  }
}

interface Boards {
  id: number;
  name: string;
}
