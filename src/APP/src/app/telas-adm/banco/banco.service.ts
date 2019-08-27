import { Injectable } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { ServiceBase } from 'app/shared/services/service-base';
import { map } from 'rxjs/operators';

import { Banco } from './models/banco';
import { Observable } from 'rxjs';

@Injectable()
export class BancoService extends ServiceBase {

  constructor(private apiService: ApiService) {
    super("banco");
  }

  obterBancos(): Observable<any> {

    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <Banco[]>res.data;
      }));
  }

  salvarBanco(model: Banco) {

    return this.apiService.post(this.urlAPI, model).pipe(
      map((res: any) => {
        return <Banco>res.data;
      }));
  } 
   
  excluirBanco(model: Banco) {

    return this.apiService.delete(this.urlAPI, model.id).pipe(
      map((res: any) => {
        return <Banco>res.data;
      }));
  }
}
