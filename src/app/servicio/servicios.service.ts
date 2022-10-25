import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getClient(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }



}