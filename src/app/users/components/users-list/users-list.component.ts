import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user.model';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  Users!: User[];
  dataSource!: MatTableDataSource<User>;
  columns: string[] = ['userName', 'email', 'isAdmin', 'actions']

  constructor(private UserService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.UserService.getUsers().subscribe((users) => {
      this.Users = users;
      this.dataSource = new MatTableDataSource<User>(this.Users);
    });
  }

  editUser(User: User) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: User
    });
  }

  deleteUser(idUser: number) {
    this.UserService.deleteUser(idUser);
  }
}


