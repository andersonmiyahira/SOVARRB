import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/services/api.service';
import { ServiceBase } from 'app/shared/services/service-base';
import { map } from 'rxjs/operators';
import { VisualizarArquivo } from './models/visualizar-arquivo';

@Injectable()
export class VisualizarArquivoService extends ServiceBase {
  constructor(private apiService: ApiService) {
    super("arquivo");
  }

  obterArquivos() {
    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <VisualizarArquivo[]>res.data;
      }));
  } 

  obterArquivosPorFiltros(filters: VisualizarArquivo) {
    return this.apiService.getByFilters(this.urlAPI, filters).pipe(
      map((res: any) => {
        return <VisualizarArquivo[]>res.data;
      }));
  } 
}
