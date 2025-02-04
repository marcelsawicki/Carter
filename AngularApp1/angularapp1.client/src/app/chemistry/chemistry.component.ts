import { Component, OnInit, signal } from '@angular/core';
import { ElementsService } from '../services/elements.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrl: './chemistry.component.css'
})
export class ChemistryComponent implements OnInit {
  currentQuestion: any;
  score: number = 0;
  totalQuestions: number = 10;
  currentQuestionIndex: number = 0;
  scoreSignal = signal(0);
  questionNoSignal = signal(1);

  constructor(private elementsService: ElementsService, private router: Router) { }

  ngOnInit(): void {
    this.nextQuestion();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestion = this.elementsService.getRandomQuestion();
    } else {
      alert(`Koniec quizu! Twój wynik: ${this.score} / ${this.totalQuestions}`);
      this.router.navigate([`/`]);
    }
  }

  checkAnswer(answer: string): void {
    if (answer === this.currentQuestion.correctAnswer) {
      this.score++;
      this.scoreSignal.set(this.score);
    }
    else {
      alert(`Poprawna odpowiedz to: ${ this.currentQuestion.symbol }, ${ this.currentQuestion.correctAnswer }`);
    }
    this.currentQuestionIndex++;
    this.questionNoSignal.set(this.currentQuestionIndex + 1);
    this.nextQuestion();
  }
}
