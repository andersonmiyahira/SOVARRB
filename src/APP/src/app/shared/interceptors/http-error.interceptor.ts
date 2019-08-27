import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { JwtService } from 'app/services/jwt.service';
import { AuthService } from 'app/services/auth.service';
import { EventosService } from 'app/core/eventos.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        private authService: AuthService,
        private jwtTokenService: JwtService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(event => { }, err => {
            if (err instanceof HttpErrorResponse && err.status == 401) {
                this.authService.purgeAuth();
                EventosService.realizouLogin.emit();
                this.router.navigate(['./login']);
            }
        });
    }
}