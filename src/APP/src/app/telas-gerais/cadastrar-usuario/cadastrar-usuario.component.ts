import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastrarUsuarioService } from './cadastrar-usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  constructor(private importarArquivoService: CadastrarUsuarioService,
    private route: Router) {

  }

  ngOnInit() {

  }

  direcionaLogin() {
    this.route.navigate(['/login']);
  }
}
