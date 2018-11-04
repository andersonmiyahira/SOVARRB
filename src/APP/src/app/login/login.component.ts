import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '../core/local-storage.service';
import { Login } from './login.model';
import { EventosService } from '../core/eventos.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioEncontrado : boolean;
  login: Login;
  public form: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private authService: AuthService
            ) {
    this.login = new Login();
    this.usuarioEncontrado = true;
  }

  ngOnInit() {
    
    if(this.authService.isLogged()) {
      this.router.navigate(['']);
    }

    this.initFormControls();
  }

  initFormControls() {
    this.form = new FormGroup({ 
      email: new FormControl(this.login.email, [
        Validators.required
      ]),
      senha: new FormControl(this.login.senha, [
        Validators.required
      ]),
      language: new FormControl()
    });
  }

  logar() {

    this.loginService.login(this.login).subscribe(res => {

      if(res.authenticated) {

        this.authService.setAuth(res);
        EventosService.realizouLogin.emit();
        this.router.navigate(['./importar-arquivo']);
      }
      else{

        this.usuarioEncontrado = false;
      }
    });
  }
}
