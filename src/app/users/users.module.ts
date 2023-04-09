import { NgModule } from '@angular/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from '../users/services/user.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/user-state.effects';
import { StoreModule } from '@ngrx/store';
import { userStateFeatureKey, reducer } from './state/user-state.reducer';

@NgModule({
  declarations: [
    AddUserComponent,
    EditUserDialogComponent,
    UsersListComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(userStateFeatureKey, reducer)
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
