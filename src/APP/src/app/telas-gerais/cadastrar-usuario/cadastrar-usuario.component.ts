import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastrarUsuarioService } from './cadastrar-usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
  providers: [Usuario]
})
export class CadastrarUsuarioComponent implements OnInit {

  public form: FormGroup;  

  constructor(private cadastrarUsuarioService: CadastrarUsuarioService,
              private route: Router,
              private model: Usuario,
              private _notifications: NotificationsService) {

  }

  ngOnInit() {

    this.initFormGroup();
  }

  initFormGroup() {

    this.form = new FormGroup({ 
      nome: new FormControl(this.model.nome, [
        Validators.required
      ]),
      email: new FormControl(this.model.email, [
        Validators.required
      ]),
      senha: new FormControl(this.model.senha, [
        Validators.required
      ]),
      confirmaSenha: new FormControl(this.model.confirmaSenha, [
        Validators.required
      ]) 
    });
  }

  salvar() {
    
    this.cadastrarUsuarioService.salvarUsuario(this.model).subscribe(()=>{
      this._notifications.success("Sucesso", "Usuário criado com sucesso.");
      this.direcionaLogin();
    });
  }

  direcionaLogin() {
    this.route.navigate(['/login']);
  }
}
