import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: [ './importar-arquivo.component.css' ]
})
export class ImportarArquivoComponent implements OnInit {

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService : ImportarArquivoService) { }

  ngOnInit() {
    
  }

  saveUpload(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
       this.importarArquivoService.upload(fileToUpload)
        .subscribe(res => {
          this.fileInput.nativeElement.value = "";
          alert('Salvo com sucesso!');
        });
    }
  }

}
