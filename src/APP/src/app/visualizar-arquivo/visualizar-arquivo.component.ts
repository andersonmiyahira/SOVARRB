import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizarArquivoService } from './visualizar-arquivo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
 
@Component({
  selector: 'app-visualizar-arquivo',
  templateUrl: './visualizar-arquivo.component.html',
  styleUrls: ['./visualizar-arquivo.component.css']
})
export class VisualizarArquivoComponent implements OnInit {
  constructor(private VisualizarArquivoService: VisualizarArquivoService) {
    
  }

  ngOnInit() {
    
  }
 
}
