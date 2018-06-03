import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {

  constructor(private router: Router, 
              private LeiouteService: LeiouteService) {
  }

  ngOnInit() {
  }

  novoLeioute() {
    this.router.navigate(['leioute-cadastrar']);
  }

  buscarLeioute() {

  }
 
}
