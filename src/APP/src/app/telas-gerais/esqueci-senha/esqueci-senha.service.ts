import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/services/api.service';

@Injectable()
export class EsqueciSenhaService {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  }
 
}
