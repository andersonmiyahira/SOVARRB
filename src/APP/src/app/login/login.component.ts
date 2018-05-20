import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private LoginService: LoginService) {
    
  }

  ngOnInit() {
    
  }
}
