import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {

  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService
  ) {
    this.userForm = new FormGroup({
      id: new FormControl(data.id),
      userName: new FormControl(data.userName),
      email: new FormControl(data.email),
      isAdmin: new FormControl(data.isAdmin)
    });
  }

  public closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.userService.saveChanges(this.userForm.getRawValue());
  }
}



