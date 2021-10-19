import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  isLoggedIn = false;
  constructor(private httpClient: HttpClient) { }

  signup(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/signup`, user)
      .pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            this.isLoggedIn = true;
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        }
      ))
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
      .pipe(tap((res: JwtResponseI) => {
          if (res) {
            this.isLoggedIn = true;
            console.log("0.", this.isLoggedIn);
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        }
      ))
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = '';
    localStorage.remove("ACCESS_TOKEN");
    localStorage.remove("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
