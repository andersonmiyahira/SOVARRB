import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor() {
  }

  getToken(): String {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: String) {
    localStorage.setItem('jwtToken', token.toString());
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
  }
}
