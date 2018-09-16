import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ImportarArquivoService {
  
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  }

  upload(fileToUpload: any, bancoId: number, tipoCNABId: number, tipoBoletoId: number): Observable<any> {
    const urlRecurso: string = "ImportarArquivo/Importar";
    let input = new FormData();

    input.append("bancoId", bancoId.toString());
    input.append("tipoCNABId", tipoCNABId.toString());
    input.append("tipoBoletoId", tipoBoletoId.toString());
    
    for (var i = 0; i < fileToUpload.length; i++) {
      input.append("formFiles", fileToUpload[i]);
    }

    const url = `${environment.urlWebAPI}${urlRecurso}`;

    return this.http.post(url, input);
    //   .catch(error => {
    //     this.notificationToastr.error(error);
    //     return Observable.throw(error);
    // });
  }

  obterBancos() {
   // return this.apiService.get("http://localhost:52854/api/banco");

   return this.http.get<any[]>("http://localhost:52854/api/banco")
   .pipe(
     tap(banco => {})
   );
  }

  obterTipoCNAB() {
    //return this.apiService.get("http://localhost:52854/api/TipoCNAB");

    return this.http.get<any[]>("http://localhost:52854/api/tipoCNAB")
    .pipe(
      tap(cnab => {})
    );
  }

  obterResultadoValidacao(id: number): any {
    return this.http.get<any[]>("http://localhost:52854/api/resultadoValidacao")
    .pipe(
      tap(()=>{})
    );
  }
}
