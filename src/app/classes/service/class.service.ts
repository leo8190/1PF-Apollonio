import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Class } from '../model/class.model';
import { Subject } from 'rxjs';

@Injectable(
)
export class ClassService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes');
  }

  deleteClass(idClass: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/' + idClass)
      .subscribe({ next: data => { } });
  }

  saveChanges(class$: Class) {
    this.http.put<Class>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/' + class$.id, class$).subscribe({});
    alert("Class saved!");
    this.serviceMethod();
  }

  addClass(class$: Class) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/', class$).subscribe({
      next: data => {
        class$.id = data.id;
        alert("Class added!");
      }
    });
  }
}
