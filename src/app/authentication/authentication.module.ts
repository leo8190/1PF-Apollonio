import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';
import { InitialAuthComponent } from '../authentication/components/initial-auth/initial-auth.component';
import { AuthenticationComponent } from '../authentication/components/authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { UserService } from '../users/services/user.service';

@NgModule({
    declarations: [
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule,
        CoreModule,
        MaterialModule
    ],
    providers: [
        UserService
    ]
})
export class AuthenticationModule { }