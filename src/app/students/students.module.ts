import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsListComponent } from '../students/components/students-list/students-list.component';
import { AddStudentComponent } from '../students/components/add-student/add-student.component';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { StudentService } from './service/student.service';
import { CoreModule } from '../core/core.module';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    StudentsListComponent,
    AddStudentComponent,
    EditStudentDialogComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    MaterialModule,
    StudentsRoutingModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
