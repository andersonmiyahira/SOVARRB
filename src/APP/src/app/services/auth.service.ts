import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { UsusarioLogado } from 'app/shared/models/usuario-logado.model';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {
    }
    
    setAuth(user: UsusarioLogado) {
        this.jwtService.saveToken(user.accessToken);
        // this.currentUserSubject.next(user);
        // this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        this.jwtService.destroyToken();
        // this.currentUserSubject.next({} as UserModel);
        // this.isAuthenticatedSubject.next(false);
    }

    isLogged(){
        var token = this.jwtService.getToken();
        return token != null && token != '' && token != undefined; 
    }
}