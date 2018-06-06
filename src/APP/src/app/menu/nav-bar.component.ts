import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { EventosService } from '../core/eventos.service';
import { LocalStorageService } from '../core/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private loginEvent$: Subscription;
  logado: boolean;
  ehAdministrador: boolean;

  constructor(private localStorageService: LocalStorageService,
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
    this.logado = localStorage.getItem("logado") == "1";
    this.ehAdministrador = localStorage.getItem("ehAdministradorLogged") == "1";
  }

  logout(){
    localStorage.clear();
    this.ajustaMenuLogin();
    this.router.navigate(['./login']);
  }

  private cadastrarEventoLogin() {
    this.loginEvent$ = EventosService.realizouLogin.subscribe(() => {
      this.ajustaMenuLogin();
    });
  }
}
