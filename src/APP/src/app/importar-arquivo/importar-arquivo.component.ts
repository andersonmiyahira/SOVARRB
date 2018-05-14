import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  errors: any;
  arquivosValidados: boolean;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService: ImportarArquivoService) {
    this.importar = {};
    this.errors = [];
    this.arquivosValidados = false;
  }

  ngOnInit() {
    this.obterBancos();
    this.obterCNAB();
    this.carregarErros();
  }

  carregarErros(){
      this.errors.push({ mensagem: "Erro! Posição 10 - Linha 100: formato de data errada"});
      this.errors.push({ mensagem: "Erro! Posição 20 - Linha 100: formato de data errada"});   
      this.errors.push({ mensagem: "Erro! Posição 30 - Linha 110: esperado valor numerico"});      
  }

  saveUpload(): void {
    let rawFiles: Array<any> = new Array<any>();
    this.uploader.queue.forEach(element => {
      rawFiles.push(element.file.rawFile);
    });
    this.importarArquivoService.upload(rawFiles, this.importar.bancoId)
      .subscribe(res => {
        this.uploader.queue.forEach(element => {
          element.isSuccess = true;
        });
        //this.fileInput.nativeElement.value = "";
        alert('Salvo com sucesso!');
        this.arquivosValidados = true;
      });
  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      console.log('res', response)
      this.bancos = response;
    });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      console.log('res', response)
      this.cnabs = response;
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




  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
}
