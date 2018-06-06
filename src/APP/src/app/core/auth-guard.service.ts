import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    let isLoggedIn = await localStorage.getItem("logado") === "1";

    if (isLoggedIn)
      return true; 
      
    this.router.navigate(['/login']);
    return false;
  }

}
