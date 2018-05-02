import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ImportarArquivoService {

  constructor(private http: HttpClient) {
  }

  upload(fileToUpload: any): Observable<any> {
    const urlRecurso: string = "ImportarArquivo/File";
    let input = new FormData();

    input.append("bancoId", "1");
    input.append("formFile", fileToUpload);
    const url = `${environment.urlWebAPI}${urlRecurso}`;

    return this.http.post(url, input);
    //   .catch(error => {
    //     this.notificationToastr.error(error);
    //     return Observable.throw(error);
     // });
  }
}
