import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { BancoService } from './banco.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {
  bancos: any;
  id: number;

  constructor(private bancoService: BancoService,
              private modalService: NgbModal) {
      this.id = 0;
  }

  ngOnInit() {
    this.obterBancos();
  }

  obterBancos() {
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }
  
  novoOpenModal(content) {
    this.id = 0;
    this.modalService.open(content, { size: 'lg' });
  }

  editarOpenModal(content, idBanco) {
    this.id = idBanco;
    this.modalService.open(content, { size: 'lg' });
  }

  excludeOpenModal(excluir, banco) {
    //this.bancos.splice(banco);
    this.modalService.open(excluir, { size: 'sm' });
  }

  excluir() {

  }

  salvar() {

  }
 
}
