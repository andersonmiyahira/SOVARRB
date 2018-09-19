import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { ServiceBase } from '../../shared/services/service-base';
import { map } from 'rxjs/operators';
import { Banco } from './models/banco';

@Injectable()
export class BancoService extends ServiceBase{

  constructor(private apiService: ApiService) {
      super("banco");
  } 

  obterBancos() {

    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <Banco[]>res.data;
      })); 
   }
}
