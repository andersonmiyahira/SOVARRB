import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from 'app/services/jwt.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, 
              private jwtService: JwtService) { }

  canActivate(): boolean {
    let isLoggedIn = this.jwtService.getToken();

    if (isLoggedIn)
      return true; 
      
    this.router.navigate(['/login']);
    return false;
  }

}
