import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { catchError, map, tap } from "rxjs/operators";
import { Caissier } from "src/app/model/model";
import { ActivitesService } from "src/app/services/activites.service";
import { OrphelinService } from "./orphelin.service";
////const BaseUrl = 'http://127.0.0.1:8080/Backend_GesHorphelinat-0.0.1-SNAPSHOT/api/';
const BaseUrl = 'https://backendgestionorphelinat.herokuapp.com/api/';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  @Injectable({
    providedIn: 'root'
  })
export class AdoptionResolver implements Resolve<any>{

    constructor(
        private http : HttpClient) {
    }
    resolve() {
      return this.http.get(BaseUrl+'adoption/liste',httpOptions).pipe(
        tap((data: any)=> console.log(data)),
        map((response: any) =>{
          return response
        }),
        catchError(async () => console.log("erreujhhjr"))
      )
      
    }
}