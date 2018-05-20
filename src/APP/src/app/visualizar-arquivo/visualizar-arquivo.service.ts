import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';

@Injectable()
export class VisualizarArquivoService {
  constructor(private http: HttpClient,
    private apiService: ApiService) {
  } 
}
