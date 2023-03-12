import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user.model';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  Users!: User[];
  dataSource!: MatTableDataSource<User>;
  suscripcion!: Subscription;
  columns: string[] = ['userName', 'email', 'isAdmin', 'actions']

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.userService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.userService.getUsers().subscribe((users) => {
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
    this.userService.deleteUser(idUser);
    alert("Press accept to finish with the delete");
    this.refresh();
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<User>();

    this.suscripcion = this.userService.getUsers().subscribe((cursos: User[]) => {
      this.dataSource.data = cursos;
    });

    this.dialog.closeAll();
  }
}


