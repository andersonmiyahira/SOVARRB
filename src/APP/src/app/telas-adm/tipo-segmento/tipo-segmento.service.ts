import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Injectable()
export class TipoSegmentoService {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  }

  obterSegmentos() {
    // return this.apiService.get("http://localhost:52854/api/banco");
 
    return this.http.get<any[]>("http://localhost:52854/api/segmentoGetAll")
    .pipe(
      //tap(banco => console.log(`fetched bancos`))
    );
   }
}
