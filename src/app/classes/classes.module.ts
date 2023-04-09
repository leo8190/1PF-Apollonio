import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { EditClassDialogComponent } from './components/edit-class-dialog/edit-class-dialog.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { ClassService } from './service/class.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ClassesRoutingModule } from './classes-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ClassesEffects } from './state/class-state.effects';
import { StoreModule } from '@ngrx/store';
import { classStateFeatureKey, reducer } from './state/class-state.reducer';

@NgModule({
  declarations: [
    ClassesListComponent,
    EditClassDialogComponent,
    AddClassComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    ClassesRoutingModule,
    FormsModule,
    EffectsModule.forFeature([ClassesEffects]),
    StoreModule.forFeature(classStateFeatureKey, reducer)
  ],
  exports: [
  ],
  providers: [
    ClassService
  ]
})
export class ClassesModule { }
