import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { ApiService } from 'app/services/api.service';
import { ImportarArquivo } from './models/importar-arquivo';

@Injectable()
export class ImportarArquivoService {
  
  constructor(private http: HttpClient) {
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
    return this.http.get<any[]>("http://localhost:52854/api/resultadoValidacao")
    .pipe(
      tap(()=>{})
    );
  }
}
