import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor() {
  }

  getToken(): String {
    return localStorage.getItem('jwtTokenSovarrb');
  }

  saveToken(token: String) {
    localStorage.setItem('jwtTokenSovarrb', token.toString());
  }

  destroyToken() {
    localStorage.removeItem('jwtTokenSovarrb');
  }
}
