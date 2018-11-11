import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { ApiService } from 'app/services/api.service';
import { ImportarArquivo } from './models/importar-arquivo';
import { ServiceBase } from 'app/shared/services/service-base';

@Injectable()
export class ImportarArquivoService extends ServiceBase {
  
  constructor(private http: HttpClient,
              private apiService: ApiService) {
    super("Arquivo");
  }

  upload(model: ImportarArquivo): Observable<any> {
    const urlRecurso: string = "ImportarArquivo/Importar";
    let input = new FormData();

    input.append("bancoId", model.bancoId.toString());
    input.append("tipoCNABId", model.tipoCNABId.toString());
    input.append("tipoBoletoId", model.tipoBoletoId.toString());
    
    for (var i = 0; i < model.fileToUpload.length; i++) {
      input.append("formFiles", model.fileToUpload[i]);
    }

    const url = `${environment.urlWebAPI}${urlRecurso}`;
    
    return this.http.post(url, input); 
  } 

  obterResultadoValidacao(id: number): any {
     const url = `${environment.urlWebAPI}LogArquivo/GetResultados?ArquivoId=`+id;
     return this.apiService.get(url).pipe(
      map((res: any) => {
        return <any[]>res.data;
      }));
  }
}
