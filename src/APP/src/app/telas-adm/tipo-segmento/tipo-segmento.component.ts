import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSegmentoService } from './tipo-segmento.service';

@Component({
  selector: 'app-tipo-segmento',
  templateUrl: './tipo-segmento.component.html',
  styleUrls: ['./tipo-segmento.component.css']
})
export class TipoSegmentoComponent implements OnInit {

  constructor(private tipoSegmentoService: TipoSegmentoService) {
  }

  ngOnInit() {
  }
 
}
