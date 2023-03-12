import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from '../../core/models/sesion';
import { User } from '../../users/model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(
        private sesion: SesionService
    ) { }

    login(user?: User) {
        let sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: user
        };

        this.sesion.crearSesion(sesion);
    }
}