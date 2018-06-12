import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ValorEsperadoBancoService {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  }

  obterBancos() {
    // return this.apiService.get("http://localhost:52854/api/banco");

    return this.http.get<any[]>("http://localhost:52854/api/bancoGetAll")
      .pipe(
        //tap(banco => console.log(`fetched bancos`))
      );
  }

  obterTipoCNAB() {
    //return this.apiService.get("http://localhost:52854/api/TipoCNAB");

    return this.http.get<any[]>("http://localhost:52854/api/tipoCNAB")
      .pipe(
        //tap(cnab => {})
      );
  }

  obterValoresEsperados() {
    // return this.apiService.get("http://localhost:52854/api/banco");

    return this.http.get<any[]>("http://localhost:52854/api/valorEsperadoGetAll")
      .pipe(
        //tap(banco => console.log(`fetched bancos`))
      );
  }
}
