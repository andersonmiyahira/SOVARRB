import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { EventosService } from '../core/eventos.service';
import { LocalStorageService } from '../core/local-storage.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'app/services/auth.service';
import { JwtService } from 'app/services/jwt.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private loginEvent$: Subscription;
  logado: boolean;
  ehAdministrador: boolean;

  constructor(private authService: AuthService,
    private jwtTokenService: JwtService,
    private router: Router) {
    this.logado = false;
    this.ehAdministrador = false;
    this.cadastrarEventoLogin();
  }

  ngOnInit() {
    this.ajustaMenuLogin();
  }

  ngOnDestroy(): void {
    if (this.loginEvent$) this.loginEvent$.unsubscribe();
  }

  ajustaMenuLogin() {

    this.logado = this.authService.isLogged();
    if (this.logado) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(this.jwtTokenService.getToken().toString());
      this.ehAdministrador = decodedToken.role === "ADMIN";
    }
  }

  logout() {

    this.authService.purgeAuth();
    this.ajustaMenuLogin();
    this.router.navigate(['./login']);
  }

  private cadastrarEventoLogin() {
    this.loginEvent$ = EventosService.realizouLogin.subscribe(() => {
      this.ajustaMenuLogin();
    });
  }
}
