import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsListComponent } from '../students/components/students-list/students-list.component';
import { AddStudentComponent } from '../students/components/add-student/add-student.component';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
// import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StudentsListComponent,
    AddStudentComponent,
    EditStudentDialogComponent
    // DeleteStudentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    MatIconModule
  ]
})
export class StudentsModule { }
