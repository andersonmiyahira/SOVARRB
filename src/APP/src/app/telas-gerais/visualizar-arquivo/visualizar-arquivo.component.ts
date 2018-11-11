import { Component, OnInit, ViewChild } from '@angular/core';
import { VisualizarArquivoService } from './visualizar-arquivo.service';
import { NgbModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImportarArquivoService } from '../importar-arquivo/importar-arquivo.service';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { BancoService } from '../../telas-adm/banco/banco.service';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { VisualizarArquivo } from './models/visualizar-arquivo';
import * as _moment from 'moment';
import { ResultadoProcessadoResponse } from './models/log-arquivo';

@Component({
  selector: 'app-visualizar-arquivo',
  templateUrl: './visualizar-arquivo.component.html',
  styleUrls: ['./visualizar-arquivo.component.css'],
  providers: [VisualizarArquivo]
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

  filter: VisualizarArquivo;

  arquivos: Array<VisualizarArquivo>;
  bancos: Array<Banco>;
  mensagens: ResultadoProcessadoResponse;

  constructor(private visualizarArquivoService: VisualizarArquivoService,
    private importarArquivoService: ImportarArquivoService,
    private bancoService: BancoService,
    private modalService: NgbModal) {
    this.filter = new VisualizarArquivo();
    this.mensagens = new ResultadoProcessadoResponse();
  }

  ngOnInit() {
    
    this.obterBancos();
  }

  obterArquivos() {

    this.formataFiltrosData();

    this.visualizarArquivoService.obterArquivosPorFiltros(this.filter).subscribe(res => {
      this.arquivos = res;
    });
  }
  
  obterBancos() {
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  formataFiltrosData() {
    if(this.filter.deDatePicker) {
      this.filter.de =  _moment(this.filter.deDatePicker).add(-1, 'M').format("YYYY-MM-DD");
    }

    if(this.filter.ateDatePicker) {
      this.filter.ate =  _moment(this.filter.ateDatePicker).add(-1, 'M').format("YYYY-MM-DD");
    }
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

 
  obterResultadoValidacao(IdArquivo) {
    this.importarArquivoService.obterResultadoValidacao(IdArquivo).subscribe(response => {
      this.mensagens.resultado = response;
    });
  }

  openResultadoValidacao(result, arquivoId) {

    this.obterResultadoValidacao(arquivoId);
    this.modalService.open(result, { size: 'lg' });
  }

  openBoletao(Boletao) {
    this.modalService.open(Boletao, { size: 'sm' });
  } 

  downloadArquivoBoletoPDF(){
    window.open(this.fileURL + "Boleto1.pdf", "_blank");
  }

  download(id: number, nome: string){
    this.visualizarArquivoService
      .download(id)
      .subscribe(data => { this.downloadFile(data, id, nome); } );
  }

  downloadFile(data: any, id: number, nome: string){

    var binary = atob(data.data)
    var array = new Uint8Array(binary.length)
    for( var i = 0; i < binary.length; i++ ) { array[i] = binary.charCodeAt(i) }
    var blob = new Blob([array])

    var url= window.URL.createObjectURL(blob);

    var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = nome;//"Arquivo" + id.toString() + ".txt";
        a.click();
  }
}
