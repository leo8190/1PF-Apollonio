import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(
        private sesion: SesionService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.sesion.obtenerSesion().pipe(
            map((sesion: Sesion) => {
                if (sesion.sesionActiva) {
                    return true;
                } else {
                    alert('Haga Login para entrar a las funcionalidades de la App');
                    this.router.navigate(['inicio']);
                    return false;
                }
            })
        );
    }

}