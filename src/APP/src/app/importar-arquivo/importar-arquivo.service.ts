import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';

@Injectable()
export class ImportarArquivoService {
  constructor(private http: HttpClient, 
              private apiService: ApiService) {
  }
   
  upload(fileToUpload: any, bancoId: number): Observable<any> {
    const urlRecurso: string = "ImportarArquivo/File";
    let input = new FormData();

    input.append("bancoId", bancoId.toString());
    input.append("formFile", fileToUpload);
    const url = `${environment.urlWebAPI}${urlRecurso}`;

    return this.http.post(url, input);
    //   .catch(error => {
    //     this.notificationToastr.error(error);
    //     return Observable.throw(error);
     // });
  }

  obterBancos() {
      return this.apiService.get("http://localhost:52854/api/banco"); 
  }
}
