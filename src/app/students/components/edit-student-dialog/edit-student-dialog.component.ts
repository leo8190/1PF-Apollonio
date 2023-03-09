import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../model/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentService
  ){
    this.formulario = new FormGroup({
      id: new FormControl(data.id),
      createdAt: new FormControl(data.createdAt),
      name: new FormControl(data.name),
      surname: new FormControl(data.surname),
      email: new FormControl(data.email),
      documentNumber: new FormControl(data.documentNumber),
      isActive: new FormControl(data.isActive),
      enrolledCourses: new FormControl(data.enrolledCourses),
      phoneNumber: new FormControl(data.phoneNumber),
    });
  }

  public closeModal() {
    this.dialogRef.close();
  }

  saveChanges() { 
    this.studentService.saveChanges(this.formulario.getRawValue());
  }
}
