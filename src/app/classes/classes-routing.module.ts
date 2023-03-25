import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassComponent } from './components/add-class/add-class.component';
import { EditClassDialogComponent } from './components/edit-class-dialog/edit-class-dialog.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { AdminGuard } from '../core/guards/admin.guards';
import { UserGuard } from '../core/guards/user.guards';
import { SesionGuard } from '../core/guards/sesion.guards';

const routes: Routes = [
    {
        path: 'classes', canActivate: [SesionGuard], children: [
            { path: 'view', component: ClassesListComponent },
            { path: 'edit', component: EditClassDialogComponent, canActivate: [AdminGuard] },
            { path: 'add', component: AddClassComponent, canActivate: [AdminGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassesRoutingModule { }
