import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guards';
import { AddInscriptionComponent } from './components/add-inscription/add-inscription.component';
import { EditInscriptionDialogComponent } from './components/edit-inscription-dialog/edit-inscription-dialog.component';
import { InscriptionsListComponent } from './components/inscriptions-list/inscriptions-list.component';

const routes: Routes = [
    {
        path: 'inscriptions', canActivate: [SesionGuard], children: [
            { path: 'view', component: InscriptionsListComponent },
            { path: 'edit', component: EditInscriptionDialogComponent },
            { path: 'add', component: AddInscriptionComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InscriptionRoutingModule { }
