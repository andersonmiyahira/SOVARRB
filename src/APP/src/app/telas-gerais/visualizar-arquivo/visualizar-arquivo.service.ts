import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/services/api.service';
import { ServiceBase } from 'app/shared/services/service-base';
import { map, catchError } from 'rxjs/operators';
import { VisualizarArquivo } from './models/visualizar-arquivo';

@Injectable()
export class VisualizarArquivoService extends ServiceBase {

  constructor(private apiService: ApiService,
              private http: HttpClient) {
    super("arquivo");
  }

  obterArquivos(): Observable<any>  {
    return this.apiService.get(this.urlAPI).pipe(
      map((res: any) => {
        return <VisualizarArquivo[]>res.data;
      }));
  }

  obterArquivosPorFiltros(filters: VisualizarArquivo): Observable<any>  {
    return this.apiService.getByFilters(this.urlAPI, filters).pipe(
      map((res: any) => {
        return <VisualizarArquivo[]>res.data;
      }));
  }

  download(id: number): Observable<any>  {
    return this.http
      .get(this.urlAPI + `download?id=${id}`).pipe(
        map(res => {
          return res;
        }));
  }
}
