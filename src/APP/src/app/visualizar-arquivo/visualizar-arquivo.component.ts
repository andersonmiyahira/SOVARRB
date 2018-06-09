import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizarArquivoService } from './visualizar-arquivo.service';
import { NgbModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImportarArquivoService } from '../importar-arquivo/importar-arquivo.service';

@Component({
  selector: 'app-visualizar-arquivo',
  templateUrl: './visualizar-arquivo.component.html',
  styleUrls: ['./visualizar-arquivo.component.css']
})

export class VisualizarArquivoComponent implements OnInit {
  logoDatePickerUrl = "../../assets/img/calendar-icon.svg";
  fileURL = "http://localhost:4200/assets/files/REM01.txt";

  arquivos: any;
  bancos: any;
  cnabs: any;
  mensagens: any;

  constructor(private visualizarArquivoService: VisualizarArquivoService,
    private importarArquivoService: ImportarArquivoService,
    private modalService: NgbModal) {
    this.mensagens = {};
  }

  ngOnInit() {
    this.obterResultadoValidacao();
    this.obterCNAB();
    this.obterBancos();
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  downloadArquivo() {
    window.open(this.fileURL, "_blank");
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

  obterResultadoValidacao() {
    this.importarArquivoService.obterResultadoValidacao(1).subscribe(response => {
      this.mensagens.header = {};
      this.mensagens.header.sucesso = [];
      this.mensagens.header.erro = [];

      this.mensagens.detalhe = {};
      this.mensagens.detalhe.sucesso = [];
      this.mensagens.detalhe.erro = [];

      this.mensagens.trailer = {};
      this.mensagens.trailer.sucesso = [];
      this.mensagens.trailer.erro = [];

      this.mensagens.header.sucesso = response.filter(x => x["tipo"] == 1 && x["ehValido"] == true);
      this.mensagens.header.erro = response.filter(x => x["tipo"] == 1 && x["ehValido"] == false);

      this.mensagens.detalhe.sucesso = response.filter(x => x["tipo"] == 2 && x["ehValido"] == true);
      this.mensagens.detalhe.erro = response.filter(x => x["tipo"] == 2 && x["ehValido"] == false);

      this.mensagens.trailer.sucesso = response.filter(x => x["tipo"] == 3 && x["ehValido"] == true);
      this.mensagens.trailer.erro = response.filter(x => x["tipo"] == 3 && x["ehValido"] == false);
    });
  }
}
