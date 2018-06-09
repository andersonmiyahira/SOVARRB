import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: ['./importar-arquivo.component.css']
})
export class ImportarArquivoComponent implements OnInit {
  bancos: any;
  cnabs: any;
  importar: any;

  mensagens: any; 

  arquivosValidados: boolean;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService: ImportarArquivoService,
              private modalService: NgbModal) {
    this.importar = {}; 
    this.arquivosValidados = false;
    this.mensagens = {};
  }

  ngOnInit() {
    this.obterBancos();
    this.obterCNAB();
    this.obterResultadoValidacao();
  }

  // carregarErros(){
  //     this.errors.push({ mensagem: "Erro! Posição 10 - Linha 100: formato de data errada", ehSucesso : false});
  //     this.errors.push({ mensagem: "Erro! Posição 20 - Linha 100: formato de data errada", ehSucesso: false});   
  //     this.errors.push({ mensagem: "Erro! Posição 30 - Linha 110: esperado valor numerico"});      
  //     this.errors.push({ mensagem: "Sucesso! Posição 30 - Linha 110: OK",  ehSucesso: true}); 
  // }

  // carregarSucessos(){
  //   this.sucessos.push({ tipo:"Detalhe", mensagem: "Posição 31 - Posição 35, Linha 111", ehSucesso: true}); 
  //   this.sucessos.push({ tipo:"Detalhe", mensagem: "Posição 32 - Posição 40, Linha 112", ehSucesso: true}); 
  // }

  saveUpload(sucesso): void {
    // let rawFiles: Array<any> = new Array<any>();
    // this.uploader.queue.forEach(element => {
    //   rawFiles.push(element.file.rawFile);
    // });
    // this.importarArquivoService.upload(rawFiles, this.importar.bancoId)
    //   .subscribe(res => {
    //     this.uploader.queue.forEach(element => {
    //       element.isSuccess = true;
    //     });
        //this.fileInput.nativeElement.value = "";
        this.arquivosValidados = true;
        this.modalService.open(sucesso, { size: 'lg' });
    //});
  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }

  obterResultadoValidacao(){
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


  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
