import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  cantidad: number = 1;

  constructor() {}

  ngOnInit() {}

  decrease() {
    if (this.cantidad > 1) {
      this.cantidad = this.cantidad - 1;
    }
  }

  increase() {
    this.cantidad = this.cantidad + 1;
  }
}
