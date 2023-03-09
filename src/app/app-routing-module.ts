import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './students/components/add-student/add-student.component';
import { AddCourseComponent } from './courses/components/add-course/add-course.component';
import { StudentsListComponent } from './students/components/students-list/students-list.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';

export const routes: Routes = [
    {
        path: "", component:StudentsListComponent
    },
    {
        path: "add-student", component:AddStudentComponent
    },
    {
        path: "add-course", component:AddCourseComponent
    },
    {
        path: "view-courses", component:CoursesListComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

