import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastrarUsuarioService } from './cadastrar-usuario.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
 

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  constructor(private importarArquivoService: CadastrarUsuarioService) {
    
  }

  ngOnInit() {
     
  }
}
