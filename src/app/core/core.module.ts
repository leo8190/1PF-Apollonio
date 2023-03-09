import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { CoreRoutingModule } from '../core/core-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
