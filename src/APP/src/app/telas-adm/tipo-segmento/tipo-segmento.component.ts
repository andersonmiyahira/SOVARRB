import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSegmentoService } from './tipo-segmento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from '../banco/banco.service';

@Component({
  selector: 'app-tipo-segmento',
  templateUrl: './tipo-segmento.component.html',
  styleUrls: ['./tipo-segmento.component.css']
})
export class TipoSegmentoComponent implements OnInit {
  bancos: any;
  segmentos: any;
  id: number;

  constructor(private tipoSegmentoService: TipoSegmentoService,
              private bancoService: BancoService,
              private modalService: NgbModal) {
                this.id = 0;
  }

  ngOnInit() {
    this.obterSegmentos();
    this.obterBancos();
  }

  obterSegmentos() {
    this.tipoSegmentoService.obterSegmentos().subscribe(response => {
      this.segmentos = response;
    });
  }

  
  obterBancos() {
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }
  

  editarOpenModal(content, idSegmento) {
    this.id = idSegmento;
    this.modalService.open(content, { size: 'lg' });
  }

  novoOpenModal(content) {
    this.id = 0;
    this.modalService.open(content, { size: 'lg' });
  }

  excludeOpenModal(excluir) {
    this.modalService.open(excluir, { size: 'sm' });
  }
}
