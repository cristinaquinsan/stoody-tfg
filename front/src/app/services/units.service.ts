import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitI } from '../models/unit';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getUnits(username: any): Observable<any> {
    return this.httpClient.get(`${this.SERVER}/units/${username}`)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getUnitsByLanguage(username: string, language: any): Observable<any> {
    return this.httpClient
      .get(`${this.SERVER}/myLanguages/${username}/${language}`)
      .pipe(catchError(this.errorMgmt));
  }

  getUnit(unitid: any): Observable<any> {
    return this.httpClient.get(`${this.SERVER}/unit/${unitid}`)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }

  newUnit(unit: UnitI): Observable<any> {
    return this.httpClient.post(`${this.SERVER}/units`, unit)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  editUnit(unit: UnitI, unitId: any): Observable<any> {
    return this.httpClient.put(`${this.SERVER}/updateUnit/${unitId}`, unit);
  }

  updateFeedback(unit: UnitI): Observable<any> {
    return this.httpClient.put(`${this.SERVER}/updateFeedback`, unit);
  }

  deleteUnit(unitid): Observable<any> {
    return this.httpClient.delete(`${this.SERVER}/units/${unitid}`)
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
