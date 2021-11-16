import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UnitI } from '../models/unit';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  isLoggedIn = false;
  username: string;

  constructor(private httpClient: HttpClient) { }

  /** Auth Methods */

  signup(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/signup`, user)
      .pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            this.isLoggedIn = true;
            this.username = res.dataUser.username;
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
            this.username = res.dataUser.username;
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        }
      ))
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
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

  private getUsername():string{
    return this.username;
  }

  /** CRUD Units methods */

  getUnits(){
    return this.httpClient.get(`${this.AUTH_SERVER}/units`);
  }

  getUnit(unitid){
    return this.httpClient.get(`${this.AUTH_SERVER}/units/${unitid}`);
  }
  
  newUnit(unit: UnitI){
    return this.httpClient.post(`${this.AUTH_SERVER}/units`, unit)
  }

  /*editUnit(unit: UnitI){
    return this.httpClient.post(`${this.AUTH_SERVER}/units`, unit)
  }*/

  deleteUnit(unitid){
    return this.httpClient.delete(`${this.AUTH_SERVER}/units/${unitid}`)
  }

  /** CRUD words? */

}
