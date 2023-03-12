import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { CoreRoutingModule } from '../core/core-routing.module';
import { InitialAuthComponent } from '../authentication/components/initial-auth/initial-auth.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    InitialAuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreRoutingModule,
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
