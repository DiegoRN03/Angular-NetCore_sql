import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  private myAppUrl = "https://localhost:44348/"
  private myApiUrl = "api/Target/"
  constructor(private http: HttpClient) { }

  getListTargets(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<any>{
return this.http.delete(this.myAppUrl + this.myApiUrl + id) 
  }

 saveTarget(tarjeta: any): Observable<any>{
   return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta)
  }

  updateTarget(id: number, tarjeta:any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta)
  }
}
