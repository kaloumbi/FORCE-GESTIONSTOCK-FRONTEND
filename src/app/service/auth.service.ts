import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserI } from '../model/user-i';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //definir l'url du postman
  private AUTH_URL = "http://localhost:8080/auth";

  //pour les verbes postman : post, put, get, delete, pat
  constructor(private http: HttpClient, private tokenService: TokenService) { }

 
  // credentials = {email: "email@example.com", password: "password"}
  login(credentials: object) {
    // const httpOptions = new HttpHeaders({
    //   "Content-type":"application/json",
    //   'Authorization': `Bearer ${this.tokenService.getToken("auth-token")}`
    // })

    return this.http.post<UserI>(`${this.AUTH_URL}/signin`, credentials);
  }

  // credentials = {nom:"Alphonse", email: "email@example.com", password: "password"}
  signup(user: object) {
    return this.http.post<UserI>(`${this.AUTH_URL}/signup`, user);
  }
  
}
