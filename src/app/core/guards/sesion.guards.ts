import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
    providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
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
                    this.router.navigate(['']);
                    return false;
                }
            })
        );
    }
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.sesion.obtenerSesion().pipe(
            map((sesion: Sesion) => {
                if (sesion.sesionActiva) {
                    return true;
                } else {
                    this.router.navigate(['']);
                    return false;
                }
            })
        );
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.sesion.obtenerSesion().pipe(
            map((sesion: Sesion) => {
                if (sesion.sesionActiva) {
                    return true;
                } else {
                    this.router.navigate(['']);
                    return false;
                }
            })
        );
    }
}