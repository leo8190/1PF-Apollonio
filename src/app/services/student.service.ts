import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  public getStudents(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/:students');
  }
}
