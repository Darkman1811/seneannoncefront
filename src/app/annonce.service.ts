import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, ReplaySubject, throwError} from "rxjs";
import {Annonce} from "./annonce";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  protected jsonHeader;
  public subject: ReplaySubject<string> = new ReplaySubject<string>(10,5000);


  constructor(private http:HttpClient,) {
    this.jsonHeader= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }


  getAnnonces():Observable<Annonce[]>{
    return this.http.get<Annonce[]>("http://localhost:8080/annonces/0/10", {headers:this.jsonHeader}).pipe(
      catchError(this.handelerror)
    );
  }

  getAnnonce(id:number):Observable<Annonce>{
    return this.http.get<Annonce>("http://localhost:8080/annonces/"+id, {headers:this.jsonHeader}).pipe(
      catchError(this.handelerror)
    );
  }


  addAnnonce(annonce:Annonce):Observable<Annonce>{
    console.log("ajouter annonce >>> "+annonce);
    return this.http.post<Annonce>("http://localhost:8080/annonces",annonce ,{headers:this.jsonHeader}).pipe(
      catchError(this.handelerror)
    );
  }

  putAnnonce(annonce:Annonce):Observable<Annonce>{
    return this.http.put<Annonce>("http://localhost:8080/annonces",annonce ,{headers:this.jsonHeader}).pipe(
      catchError(this.handelerror)
    );
  }

  deleteAnnonce(id:number):Observable<Annonce>{
    return this.http.delete<Annonce>("http://localhost:8080/annonces/"+id,{headers:this.jsonHeader}).pipe(
      catchError(this.handelerror)
    );
  }
  handelerror(error: HttpErrorResponse){
    console.log("error catched >>>"+error.message)
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
