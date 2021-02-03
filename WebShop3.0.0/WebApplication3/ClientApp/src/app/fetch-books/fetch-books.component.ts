import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-books',
  templateUrl: './fetch-books.component.html'
})
export class FetchBooksComponent {
  public receivedbooks: Book[];
  Router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Router = router;
    http.get<Book[]>(baseUrl + 'api/books').subscribe(result => {
      this.receivedbooks = result;
    }, error => {
      console.error('przkierowanie' + error);
    });
  }
}

interface Book {
  author: string;
  id: number;
  publishing: string;
  title: string;
  year: number;
}
