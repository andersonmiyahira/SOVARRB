import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSegmentoService } from './tipo-segmento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipo-segmento',
  templateUrl: './tipo-segmento.component.html',
  styleUrls: ['./tipo-segmento.component.css']
})
export class TipoSegmentoComponent implements OnInit {
  segmentos:any;

  constructor(private tipoSegmentoService: TipoSegmentoService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.obterSegmentos();
  }

  obterSegmentos() {
    this.tipoSegmentoService.obterSegmentos().subscribe(response => {
      this.segmentos = response;
    });
  }

  novo(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  exclude(excluir) {
    this.modalService.open(excluir, { size: 'lg' });
  }
}
