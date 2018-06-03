import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';

@Component({
  selector: 'app-leioute-cadastrar',
  templateUrl: './leioute-cadastrar.component.html',
  styleUrls: ['./leioute-cadastrar.component.css']
})
export class LeiouteCadastrarComponent implements OnInit {

  constructor(private leiouteService: LeiouteService) {
  }

  ngOnInit() {
  }
 
}
