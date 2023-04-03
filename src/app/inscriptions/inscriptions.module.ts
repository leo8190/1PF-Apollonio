import { NgModule } from '@angular/core';
import { InscriptionsListComponent } from './components/inscriptions-list/inscriptions-list.component';
import { EditInscriptionDialogComponent } from './components/edit-inscription-dialog/edit-inscription-dialog.component';
import { InscriptionRoutingModule } from './inscriptions-routing.module';
import { InscriptionService } from './service/inscription.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AddInscriptionComponent } from './components/add-inscription/add-inscription.component';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './state/inscription.effects';

@NgModule({
  declarations: [
    InscriptionsListComponent,
    EditInscriptionDialogComponent,
    AddInscriptionComponent,
  ],
  imports: [
    InscriptionRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    EffectsModule.forFeature([InscriptionEffects]),
  ],
  providers: [
    InscriptionService
  ]
})
export class InscriptionsModule { }
