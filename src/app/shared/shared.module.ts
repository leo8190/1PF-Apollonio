import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinNameAndSurname } from '../shared/pipes/join-name-and-surname.pipe';
import { ColumnsHeadersStyle } from '../shared/directives/columns-headers-style.directive';

@NgModule({
  declarations: [
    JoinNameAndSurname,
    ColumnsHeadersStyle
  ],
  imports: [
    CommonModule,
    JoinNameAndSurname
  ],
  exports:[
    JoinNameAndSurname,
    ColumnsHeadersStyle
  ]
})
export class SharedModule { }
