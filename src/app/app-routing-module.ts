import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guards';
import { SesionGuard } from './core/guards/sesion.guards';

export const routes: Routes = [
    { path: 'inicio', redirectTo: 'students/view', pathMatch: 'full' },
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then((modulo) => modulo.StudentsModule),
        canLoad: [SesionGuard]
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((modulo) => modulo.UsersModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'inscriptions',
        loadChildren: () => import('./inscriptions/inscriptions.module').then((modulo) => modulo.InscriptionsModule),
        canLoad: [SesionGuard]
    },
    {
        path: 'classes',
        loadChildren: () => import('./classes/classes.module').then((modulo) => modulo.ClassesModule),
        canLoad: [SesionGuard]
    },
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then((modulo) => modulo.CoursesModule),
        canLoad: [SesionGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./authentication/authentication.module').then((modulo) => modulo.AuthenticationModule)
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

