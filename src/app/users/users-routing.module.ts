import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminGuard } from '../../app/core/guards/admin.guards';
import { SesionGuard } from '../../app/core/guards/sesion.guards';

const routes: Routes = [
    {
        path: 'users', canActivate: [AdminGuard], children: [
            //path: 'users', children: [
            // { path: 'view', component: UsersListComponent, canActivate: [AdminGuard] },
            { path: 'view', component: UsersListComponent },
            { path: 'edit', component: EditUserDialogComponent },
            { path: 'add', component: AddUserComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
