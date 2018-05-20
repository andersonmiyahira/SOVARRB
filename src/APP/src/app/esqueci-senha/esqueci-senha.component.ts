import { Component, OnInit, ViewChild } from '@angular/core';
import { EsqueciSenhaService } from './esqueci-senha.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {
  constructor(private importarArquivoService: EsqueciSenhaService) {
    
  }

  ngOnInit() {
     
  }
}
