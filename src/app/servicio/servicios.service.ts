import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }
  //https://lewipinja.pythonanywhere.com/api/clientLogin/
  //http://127.0.0.1:8000/api/clientLogin/
  loginClient(client:User){
    return this.http.post("http://127.0.0.1:8000/api/userLogin/", client);
  }
  //https://lewipinja.pythonanywhere.com/api/userCreate/
  //http://127.0.0.1:8000/api/userCreate/
  
  registerClient(client:any){
    return this.http.post("http://127.0.0.1:8000/api/userCreate/", client) 
  }
  ////userRecovery/
  recoveryPassword(email:string){
    return this.http.get("http://127.0.0.1:8000/api/userRecovery/"+email);
  }

  



}
