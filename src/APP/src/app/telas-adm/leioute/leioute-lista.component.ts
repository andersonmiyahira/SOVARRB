import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from './leioute-lista.service';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {

  constructor(private LeiouteService: LeiouteService) {
  }

  ngOnInit() {
  }
 
}
