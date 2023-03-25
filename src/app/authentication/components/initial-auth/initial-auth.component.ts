import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-initial-auth',
  templateUrl: './initial-auth.component.html',
  styleUrls: ['./initial-auth.component.css']
})
export class InitialAuthComponent {

  constructor(
    private router: Router,
    private session: SesionService
  ) { }

  logout() {
    let sessionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.session.logout(sessionLogout);
    this.router.navigate(['login']);
    alert("You are unlogged!");
  }
}
