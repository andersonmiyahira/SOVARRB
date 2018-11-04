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
        this.router.navigate(['./importar-arquivo']);
      }
      else{

        this.usuarioEncontrado = false;
      }
    });
  }

  logarFake() {
    this.loginService.obterLogin(this.login).subscribe(result => {
      let usu = result.filter(x => x["email"] == this.login.email 
                                && x["senha"] == this.login.senha);

      if(usu && usu.length > 0) { 
        localStorage.setItem("logado", "1");
        localStorage.setItem("nomeLogged", usu[0]["nome"]);
        localStorage.setItem("emailLogged", usu[0]["email"]);
        localStorage.setItem("ehAdministradorLogged", usu[0]["ehAdministrador"]);
      }
      else{
        //mostrar msg de usuario nao encontrado        
        localStorage.clear();
        this.usuarioEncontrado = false;
      }

      EventosService.realizouLogin.emit();
      if(usu && usu.length > 0) {
        this.router.navigate(['./importar-arquivo']);
      }
    });
  }
}
