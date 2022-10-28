import { Component, OnInit } from '@angular/core';
import {CarService} from '../servicio/car.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  nombre_producto: String = "Lampara";
  img: String = "./assets/img-prueba.webp";
  precio: number = 35;
  cantidad: number = 1;
  total: number = 0;
  id: number = 123;
  
  product: Object = {
    "id": 0,
    "quantity": 0,
    "name":'',
    "price":35,
    "img":''
  }

  constructor(
    private CarService: CarService, 
    private toastController: ToastController
  ) {}

  ngOnInit() {}


  async addCart(id){

    this.product = {
      "id":id,
      "quantity":this.cantidad,
      "name":this.nombre_producto,
      "price":this.precio,
      "img":this.img
    }

    this.CarService.addProduct(this.product);

    const toast = await this.toastController.create({
      message: "El producto " + this.nombre_producto + " ha sido agregado al carrito",
      duration: 2000,
      position: "top"
    });

    await toast.present();

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
