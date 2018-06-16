import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LeiouteService {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  }


  obterLeioutes() {
    // return this.apiService.get("http://localhost:52854/api/banco");
    return this.http.get<any[]>("http://localhost:52854/api/leioutes")
    .pipe(
      tap(banco => {})
    );
   }
}
