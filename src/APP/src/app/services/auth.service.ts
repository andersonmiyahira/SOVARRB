import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { UsusarioLogado } from 'app/shared/models/usuario-logado.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {
    }
    
    setAuth(user: UsusarioLogado) {
        this.jwtService.saveToken(user.accessToken); 
    }

    purgeAuth() {
        this.jwtService.destroyToken(); 
    }

    isLogged(){
        var token = this.jwtService.getToken();
        return token != null && token != '' && token != undefined; 
    }

    hasAccessUrl(url: string) {
        if(url == '') return true;

        url = url.replace("/", "");
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.jwtService.getToken().toString());

        let tools = decodedToken.toolsAccess.toString().split('|');
        for(let i = 0; i< tools.length; i++) {
            if(url == tools[i])
                return true;
        } 
        return false;
    }
}