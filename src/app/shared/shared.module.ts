import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinNameAndSurname } from '../shared/pipes/join-name-and-surname.pipe';
import { ColumnsHeadersStyle } from '../shared/directives/columns-headers-style.directive';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
  ],
  imports: [
    JoinNameAndSurname,
    ColumnsHeadersStyle,
    ReactiveFormsModule
  ],
  exports: [
    JoinNameAndSurname,
    ColumnsHeadersStyle,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
