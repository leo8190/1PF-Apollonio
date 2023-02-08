import { Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

export const routes: Routes = [
    {
        path: "", component:StudentsListComponent
    },
    {
        path: "add-student", component:AddStudentComponent
    }
]


