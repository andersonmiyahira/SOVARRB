import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizarArquivoService } from './visualizar-arquivo.service';
import { NgbModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImportarArquivoService } from '../importar-arquivo/importar-arquivo.service';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-visualizar-arquivo',
  templateUrl: './visualizar-arquivo.component.html',
  styleUrls: ['./visualizar-arquivo.component.css']
})

export class VisualizarArquivoComponent implements OnInit {
  logoDatePickerUrl = "../../assets/img/calendar-icon.svg";
  fileURL = "http://localhost:4200/assets/files/";

  optionsModel: number[];
  valoresEsperados: IMultiSelectOption[];
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    buttonClasses: 'btn btn-primary btn-sm',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};

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
    this.obterValoresEsperados();
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openBoletao(Boletao) {
    this.modalService.open(Boletao, { size: 'sm' });
  }

  downloadArquivo() {
    window.open(this.fileURL + "REM01.txt", "_blank");
  }

  downloadArquivoBoletoPDF(){
    window.open(this.fileURL + "Boleto1.pdf", "_blank");
  }

  obterArquivos() {
    this.visualizarArquivoService.obterArquivos().subscribe(res => {
      this.arquivos = res;
    });
  }

  obterValoresEsperados() {
    
    this.valoresEsperados = [
      { id: 1, name: 'Boleto 1' },
      { id: 2, name: 'Boleto 2' },
      { id: 3, name: 'Boleto 3' },
      { id: 4, name: 'Boleto 4' },
      { id: 5, name: 'Boleto 5' },
      { id: 6, name: 'Boleto 6' }
    ]
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
