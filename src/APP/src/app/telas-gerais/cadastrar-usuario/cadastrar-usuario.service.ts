import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/services/api.service';
import { ServiceBase } from '../../shared/services/service-base';
import { Usuario } from './model/usuario';
import { map } from 'rxjs/operators';


@Injectable()
export class CadastrarUsuarioService extends ServiceBase{

  constructor(private apiService: ApiService) {
    super("usuario");
  }

  salvarUsuario(model: Usuario) {

    return this.apiService.post(this.urlAPI, model).pipe(
      map((res: any) => {
        return <Usuario>res.data;
      }));
  } 
 
}
