import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from 'app/services/jwt.service';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private jwtService: JwtService,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let isLoggedIn = this.authService.isLogged();
    if (isLoggedIn) {
      if (this.authService.hasAccessUrl(state.url))
        return true;
      else {
        this.router.navigate(['/acesso-negado']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
