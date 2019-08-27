import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';

import { tap, catchError, filter, map } from 'rxjs/operators';
import { Login } from './login.model';
import { ServiceBase } from 'app/shared/services/service-base';
import { UsusarioLogado } from 'app/shared/models/usuario-logado.model';

@Injectable()
export class LoginService extends ServiceBase {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
    super("login");
  }

  obterLogin(login: Login) {
    return this.http.get<any[]>("http://localhost:52854/api/login")
      .pipe(
        tap(result => { })
      )
  }

  login(login: Login) {
  
    return this.apiService.post(this.urlAPI, login).pipe(
      map((res: any) => {
        return <UsusarioLogado>res.data;
      })
    );
  }
}
