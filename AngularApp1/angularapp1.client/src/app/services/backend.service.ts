import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'https://localhost:7019/api/questions'; // Adres API

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getQuestionById(id: number): Observable<Question> {
    const url = `${this.apiUrl}/${id}`; // Tworzenie pełnego URL z ID
    return this.http.get<Question>(url);
  }
}
