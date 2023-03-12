import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../users/model/user.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  triggerMethod = new Subject<any>();

  constructor(private http: HttpClient) { }

  serviceMethod(): void {
    this.triggerMethod.next('');
  }

  getUsers(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/users');
  }

  deleteUser(idUser: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + idUser)
      .subscribe({ next: data => { } });
  }

  saveChanges(user: User) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + user.id, user)
      .subscribe({ next: data => { user.id = data.id; } });
    alert("User saved!");
    this.serviceMethod();
  }

  addUser(user: User) {
    this.http.post<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/', user).subscribe({
      next: data => {
        user.id = data.id;
        alert("User added!");
      }
    });
  }
}

