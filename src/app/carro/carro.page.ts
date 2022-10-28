import { Component, OnInit } from '@angular/core';
import { IonItem } from '@ionic/core/components';
import { Key } from 'protractor';
import { CarService } from '../servicio/car.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  selectedItem = [];
  total = 0;
  cantidad: number = 1;
  id: number = 123;

  constructor(
    private cartService: CarService,
  ) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let select = {};

    for (let obj of items) {
      select[obj.id] = { ...obj, count: 1 }
    }

    this.selectedItem = Object.keys(select).map(key => select[key])
    console.log('items', this.selectedItem);
    this.total = this.selectedItem.reduce((a, b) => a + (b.quantity * b.price), 0);
  }

  decrease(id) {
    for (let item of this.selectedItem) {
      if (item.id = id) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
          this.total = this.total - item.price;
        }
      }
    }
  }

  increase(id) {
    for (let item of this.selectedItem) {
      if (item.id = id) {
        item.quantity = item.quantity + 1;
        this.total = this.total + item.price;
      }
    }
  }


  delete(id) {
    for (let item of this.selectedItem) {
      if (item.id = id) {
        this.selectedItem = this.selectedItem.filter(item => item !== item)
        this.total = this.total - item.price*item.quantity;
      }
    }
  }

}
