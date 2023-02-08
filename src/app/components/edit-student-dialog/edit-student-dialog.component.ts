import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ){
    this.formulario = new FormGroup({
      nameAndSurname: new FormControl(data.nameAndSurname),
      email: new FormControl(data.email),
      phoneNumber: new FormControl(data.phoneNumber),
      documentNumber: new FormControl(data.documentNumber)
    });
  }
}
