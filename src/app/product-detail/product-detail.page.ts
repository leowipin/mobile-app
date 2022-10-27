import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  nombre_producto: String = "Lampara";
  img: String = "../../assets/img-prueba.webp";
  precio: number = 35;
  cantidad: number = 1;
  total: number = 0;
  product: Object = {
    "quantity": 0,
    "name":'',
    "price":35,
    "img":''
  }

  constructor() {}

  ngOnInit() {}


  addCart(){
    this.product = {
      "quantity":this.cantidad,
      "name":this.nombre_producto,
      "price":this.precio,
      "img":this.img
    }

    console.log(this.product);

  }
  decrease() {
    if (this.cantidad > 1) {
      this.cantidad = this.cantidad - 1;
      this.total = this.precio * this.cantidad;
    }
  }

  increase() {
    this.cantidad = this.cantidad + 1;
    this.total = this.precio * this.cantidad;
  }
}
