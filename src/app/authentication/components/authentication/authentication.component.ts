import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../users/model/user.model';
import { AuthenticationService } from '../../service/authentication.service';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  formulario!: FormGroup;
  users!: User[];
  user?: User;

  constructor(
    private AuthenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
      isAdmin: new FormControl(false)
    });
  }

  login() {
    try {
      this.userService.getUsers().subscribe((users) => {
        this.users = users
        this.user = this.users.find(u => u.userName == this.formulario.value.userName &&
          u.password == this.formulario.value.password)

        if (this.user === undefined || this.user === null) {
          alert("The entered user does not exist or the password is wrong");
          throw "exit";
        }

        this.AuthenticationService.login(this.user);
        this.router.navigate(['inicio']);
      });
    }
    catch (e) { }
  }
}
