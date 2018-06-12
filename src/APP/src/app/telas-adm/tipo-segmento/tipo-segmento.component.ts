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
  id: number;

  constructor(private tipoSegmentoService: TipoSegmentoService,
              private modalService: NgbModal) {
                this.id = 0;
  }

  ngOnInit() {
    this.obterSegmentos();
  }

  obterSegmentos() {
    this.tipoSegmentoService.obterSegmentos().subscribe(response => {
      this.segmentos = response;
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
    this.modalService.open(excluir, { size: 'lg' });
  }
}
