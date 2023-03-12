import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(private userService: UserService) {
    let controls: any = {
      userName: new FormControl("", [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      isAdmin: new FormControl(false),
      isActive: new FormControl(true)
    }
    this.addUserForm = new FormGroup(controls);
  }

  addUser() {
    if (this.addUserForm.controls['userName'].valid
      && this.addUserForm.controls['email'].valid
      && this.addUserForm.controls['password'].valid) {
      this.userService.addUser(this.addUserForm.getRawValue());
      this.addUserForm.reset();
    }
    else {
      alert("There are problems with some of the fields");
    }
  }
}

