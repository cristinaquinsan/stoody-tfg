import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitI } from '../models/unit';


@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  AUTH_SERVER: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  /** CRUD Units methods */

  getUnits(username){
    return this.httpClient.get(`${this.AUTH_SERVER}/units`, username);
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
}
