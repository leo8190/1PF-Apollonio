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

  deleteClass(idClass: number): Observable<Class> {
    let deletedClass = this.http.delete<Class>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/' + idClass);
    deletedClass.subscribe({ next: data => { } });
    return deletedClass;
  }

  saveChanges(class$: Class): Observable<Class> {
    let savedClass = this.http.put<Class>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/' + class$.id, class$);
    savedClass.subscribe({});
    alert("Class saved!");
    this.serviceMethod();
    return savedClass;
  }

  addClass(class$: Class): Observable<Class> {
    let addedClass = this.http.post<Class>('https://63dd0c2fdf83d549ce996a90.mockapi.io/classes/', class$);

    addedClass.subscribe({
      next: data => {
        class$.id = data.id;
        alert("Class added!");
      }
    });

    return addedClass;
  }
}
