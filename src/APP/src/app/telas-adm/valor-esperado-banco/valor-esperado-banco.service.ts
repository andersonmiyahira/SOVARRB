import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ServiceBase } from '../../shared/services/service-base';
import { map } from 'rxjs/operators';
import { ValorEsperado } from './model/valor-esperado';

@Injectable()
export class ValorEsperadoBancoService extends ServiceBase {
  constructor(private apiService: ApiService) {
    super("valorEsperado");
  }

  obterValoresEsperados() {
    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <ValorEsperado[]>res.data;
      }));
  }

  inserirValorEsperado(model: ValorEsperado) {

    return this.apiService.post(this.urlAPI, model).pipe(
      map((res: any) => {
        return <ValorEsperado>res.data;
      }));
  }

  atualizarValorEsperado(model: ValorEsperado) {

    return this.apiService.put(this.urlAPI, model).pipe(
      map((res: any) => {
        return <ValorEsperado>res.data;
      }));
  }

  excluirValorEsperado(model: ValorEsperado) {

    return this.apiService.delete(this.urlAPI, model.idValorEsperado).pipe(
      map((res: any) => {
        return <ValorEsperado>res.data;
      }));
  }

}
