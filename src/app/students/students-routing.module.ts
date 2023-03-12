import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AdminGuard } from '../../app/core/guards/admin.guards';
import { SesionGuard } from '../../app/core/guards/sesion.guards';

const routes: Routes = [
  {
    path: 'students', canActivate: [SesionGuard], children: [
      { path: 'view', component: StudentsListComponent },
      { path: 'edit', component: EditStudentDialogComponent, canActivate: [AdminGuard] },
      { path: 'add', component: AddStudentComponent, canActivate: [AdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
