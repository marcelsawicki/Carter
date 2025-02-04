import { Component, OnInit, Injectable, Inject, effect, input, inject, computed, signal } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Question } from '../models/question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  question!: Question;
  page = computed(()=>{ 
    return this.id() + 1;
    })

    pageback = computed(()=>{ 
      return this.id() - 1;
      })
  // Dynamiczne odczytanie `id` z URL-a za pomocą sygnału
  private route = inject(ActivatedRoute);
  id = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))), 
    { initialValue: 0 } 
  );
  feedback = signal<string>('');
  correctAnswers = signal(0);
  allAnswers = signal(0);

  constructor(
    private questionService: BackendService,
    private router: Router
  ) {
    // Wykonaj efekt, aby monitorować zmiany `id`
    effect(() => {
      const currentId = this.id();
      console.log('Aktualne ID:', currentId);
      // Jeśli potrzebujesz, możesz tutaj dodać logikę ładowania danych na podstawie `id`
      if (currentId) {
        this.loadQuestion(currentId);
      }
    });
  }

  // Funkcja do ładowania pytania na podstawie `id`
  private loadQuestion(id: number) {
    this.questionService.getQuestionById(id).subscribe((question) => {
      this.question = question;
      this.feedback.set('');
      if(question.media){
        this.question.media = "/output/" + question.media.replace(".wmv", ".mp4");
      }
    });
  }

  // Nawigacja na nową trasę
  navigate() {
    this.router.navigate([`/learning/${this.page()}`]);
  }
  navigateback() {
    this.router.navigate([`/learning/${this.pageback()}`]);
  }
  
  checkAnswer(selectedAnswer: string) {
    this.allAnswers.set(this.allAnswers() + 1);
    if (this.question.answer === selectedAnswer) {
      this.feedback.set('Poprawna odpowiedź!');
      this.correctAnswers.set(this.correctAnswers() + 1);
    } else {
      this.feedback.set('Niepoprawna odpowiedź, spróbuj ponownie.');
    }
  }
}


