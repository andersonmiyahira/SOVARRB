import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: [ './importar-arquivo.component.css' ]
})
export class ImportarArquivoComponent implements OnInit {
  bancos: any;
  importar: any;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService : ImportarArquivoService) {
    this.importar = {};
   }

  ngOnInit() {
    this.obterBancos();
  }

  saveUpload(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
       this.importarArquivoService.upload(fileToUpload, this.importar.bancoId)
        .subscribe(res => {
          this.fileInput.nativeElement.value = "";
          alert('Salvo com sucesso!');
        });
    }
  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      console.log('res', response)
      this.bancos = response;
    });
  }

}
