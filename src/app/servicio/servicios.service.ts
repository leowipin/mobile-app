import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getClient(email:string){
    return this.http.get("https://maryta22.pythonanywhere.com/api/client/"+email);
  }

  registerClient(client:any){
    return this.http.post("https://maryta22.pythonanywhere.com/api/client/", client)
  }



}
