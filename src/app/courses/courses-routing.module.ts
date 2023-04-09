import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseDialogComponent } from './components/edit-course-dialog/edit-course-dialog.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AdminGuard } from '../../app/core/guards/admin.guards';
import { SesionGuard } from '../../app/core/guards/sesion.guards';

const routes: Routes = [
    {
        path: 'courses', canActivate: [SesionGuard], children: [
            { path: 'view', component: CoursesListComponent },
            { path: 'edit', component: EditCourseDialogComponent, canActivate: [AdminGuard] },
            { path: 'add', component: AddCourseComponent, canActivate: [AdminGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
