import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';

@Injectable(
)
export class UserService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users');
  }

  deleteUser(idUser: number): Observable<User> {
    let deletedUser = this.http.delete<User>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + idUser);
    deletedUser.subscribe({ next: data => { } });
    return deletedUser;
  }

  saveChanges(user: User): Observable<User> {
    let savedUser = this.http.put<User>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + user.id, user);
    savedUser.subscribe({});
    alert("User saved!");
    this.serviceMethod();
    return savedUser;
  }

  addUser(user: User): Observable<User> {
    let addedUser = this.http.post<User>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/', user);

    addedUser.subscribe({
      next: data => {
        user.id = data.id;
        alert("User added!");
      }
    });

    return addedUser;
  }
}
