import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';

import { tap, catchError, filter, map } from 'rxjs/operators';
import { Login } from './login.model';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient,
              private apiService: ApiService) {
  }
  
  obterLogin(login: Login) {
    return this.http.get<any[]>("http://localhost:52854/api/login")
    .pipe( 
      tap(result => { })
    ) 
   }
}
