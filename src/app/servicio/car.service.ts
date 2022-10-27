import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cart = [];

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }

  removeProduct(){
    this.cart=[];
  }
  constructor() { }
}
