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
  constructor(private bancoService: BancoService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.obterBancos();
  }

  obterBancos() {
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }
  
  novo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  exclude(excluir) {
    this.modalService.open(excluir, { size: 'lg' });
  }
 
}
