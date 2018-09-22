import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ServiceBase } from '../../shared/services/service-base';
import { Segmento } from './model/segmento';
import { map } from 'rxjs/operators';

@Injectable()
export class TipoSegmentoService extends ServiceBase{
  constructor(private apiService: ApiService) {
    super("segmento");
  }

  obterSegmentos() {

    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <Segmento[]>res.data;
      }));
  }

  atualizarSegmento(model: Segmento) {

    return this.apiService.put(this.urlAPI, model).pipe(
      map((res: any) => {
        return <Segmento>res.data;
      }));
  } 

  inserirSegmento(model: Segmento) {

    return this.apiService.post(this.urlAPI, model).pipe(
      map((res: any) => {
        return <Segmento>res.data;
      }));
  } 
   
  excluirSegmento(model: Segmento) {

    return this.apiService.delete(this.urlAPI, model.idSegmento).pipe(
      map((res: any) => {
        return <Segmento>res.data;
      }));
  }
}
