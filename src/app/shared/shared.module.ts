import { isDevMode, NgModule } from '@angular/core';
import { JoinNameAndSurname } from '../shared/pipes/join-name-and-surname.pipe';
import { ColumnsHeadersStyle } from '../shared/directives/columns-headers-style.directive';
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
  ],
  imports: [
    JoinNameAndSurname,
    ColumnsHeadersStyle,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({}, {}),
  ],
  exports: [
    JoinNameAndSurname,
    ColumnsHeadersStyle,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
