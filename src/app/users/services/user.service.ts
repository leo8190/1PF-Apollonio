import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../users/model/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://63dd0c2fdf83d549ce996a90.mockapi.io/users');
  }

  deleteUser(idUser: number) {
    this.http.delete('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + idUser

    ).subscribe({
      next: data => {
        alert("User deleted!");
        window.location.reload();
      }
    });
  }

  saveChanges(user: User) {
    this.http.put<any>('https://63dd0c2fdf83d549ce996a90.mockapi.io/users/' + user.id, user).subscribe({
      next: data => {
        user.id = data.id;
        alert("User saved!");
        window.location.reload();
      }
    });
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

