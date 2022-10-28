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
    console.log(this.cart);
  }

  removeProduct(){
    this.cart=[];
  }
  constructor() { }
}
