import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizarArquivoService } from './visualizar-arquivo.service';
import { NgbModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visualizar-arquivo',
  templateUrl: './visualizar-arquivo.component.html',
  styleUrls: ['./visualizar-arquivo.component.css']
})

export class VisualizarArquivoComponent implements OnInit {
  logoDatePickerUrl = "../../assets/img/calendar-icon.svg";
  errors: any;
  sucessos: any;
  arquivos: any;
  bancos: any;
  cnabs: any;

  constructor(private visualizarArquivoService: VisualizarArquivoService,
    private modalService: NgbModal) {
    this.errors = new Array<any>();
    this.sucessos = new Array<any>();
  }

  ngOnInit() {
    this.carregarErros();
    this.carregarSucessos();
    this.obterArquivos();
    this.obterCNAB();
    this.obterBancos();
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  obterArquivos() {
    this.visualizarArquivoService.obterArquivos().subscribe(res => {
      this.arquivos = res;
    });
  }

  obterBancos() {
    this.visualizarArquivoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterCNAB() {
    this.visualizarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }

  carregarErros() {
    this.errors.push({ tipo: "Header", mensagem: "Posição 10 - Posição 20, Linha 100: formato de data errada", ehSucesso: false });
    this.errors.push({ tipo: "Detalhe", mensagem: "Posição 20 - Posição 25, Linha 102: formato de data errada", ehSucesso: false });
    this.errors.push({ tipo: "Detalhe", mensagem: "Posição 25 - Posição 30, Linha 109: formato de data errada", ehSucesso: false });
    this.errors.push({ tipo: "Footer", mensagem: "Posição 30 - Posição 38, Linha 110: esperado valor numerico", ehSucesso: false });

  }

  carregarSucessos() {
    this.sucessos.push({ tipo: "Detalhe", mensagem: "Posição 31 - Posição 35, Linha 111", ehSucesso: true });
    this.sucessos.push({ tipo: "Detalhe", mensagem: "Posição 32 - Posição 40, Linha 112", ehSucesso: true });
  }
}
