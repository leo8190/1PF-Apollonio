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

  getInscriptions(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions');
  }

  deleteInscription(idInscription: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/' + idInscription)
      .subscribe({ next: data => { } });
  }

  saveChanges(inscription: Inscription) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/' + inscription.id, inscription).subscribe({
      next: data => { inscription.id = data.id; }
    });
    alert("Inscription saved!");
    this.serviceMethod();
  }

  addInscription(inscription: Inscription) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/inscriptions/', inscription).subscribe({
      next: data => {
        inscription.id = data.id;
        alert("Inscription added!");
      }
    });
  }
}
