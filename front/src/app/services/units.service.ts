import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitI } from '../models/unit';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  AUTH_SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  /** CRUD Units methods */

  getUnits(username: any): Observable<any>{
    return this.httpClient.get(`${this.AUTH_SERVER}/units/${username}`)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  getUnit(unitid: any): Observable<any>{
    return this.httpClient.get(`${this.AUTH_SERVER}/unit/${unitid}`)
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    );
  }
  
  newUnit(unit: UnitI): Observable<any>{
    return this.httpClient.post(`${this.AUTH_SERVER}/units`, unit)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  /*editUnit(unit: UnitI){
    return this.httpClient.post(`${this.AUTH_SERVER}/units`, unit)
  }*/

  deleteUnit(unitid): Observable<any>{
    return this.httpClient.delete(`${this.AUTH_SERVER}/units/${unitid}`)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
