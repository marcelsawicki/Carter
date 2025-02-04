import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // Signal do przechowywania loginu
  private loginSignal = signal<string | null>(null);

  constructor() {
    // Pobierz login z sesji, jeśli istnieje
    const storedLogin = sessionStorage.getItem('login');
    if (storedLogin) {
      this.loginSignal.set(storedLogin);
    }
  }

  // Metoda do zapisania loginu w sesji i aktualizacji sygnału
  setLogin(login: string): void {
    sessionStorage.setItem('login', login); // Zapisz w sesji
    this.loginSignal.set(login); // Zaktualizuj sygnał
  }

  // Metoda do odczytania loginu jako wartości
  getLogin(): string | null {
    return this.loginSignal(); // Zwraca bieżącą wartość sygnału
  }

  // Getter sygnału (do subskrypcji w komponentach)
  get login() {
    return this.loginSignal;
  }

  // Metoda do usunięcia loginu
  clearLogin(): void {
    sessionStorage.removeItem('login'); // Usuń z sesji
    this.loginSignal.set(null); // Resetuj sygnał
  }
}
