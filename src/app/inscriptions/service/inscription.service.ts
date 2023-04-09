import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Inscription } from '../model/inscription.model';
import { Subject } from 'rxjs';

@Injectable(
)
export class InscriptionService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getInscriptions(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions');
  }

  deleteInscription(idInscription: number): Observable<Inscription> {
    let deletedInscription = this.http.delete<Inscription>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/' + idInscription);
    deletedInscription.subscribe({ next: data => { } });
    return deletedInscription;
  }

  saveChanges(inscription: Inscription): Observable<Inscription> {
    let savedInscription = this.http.put<Inscription>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/' + inscription.id, inscription);
    savedInscription.subscribe({ next: data => { inscription.id = data.id; } });
    alert("Inscription saved!");
    this.serviceMethod();
    return savedInscription;
  }

  addInscription(inscription: Inscription): Observable<Inscription> {
    let addedInscription = this.http.post<Inscription>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/', inscription);

    addedInscription.subscribe({
      next: data => {
        inscription.id = data.id;
        alert("Inscription added!");
      }
    });

    return addedInscription;
  }
}
