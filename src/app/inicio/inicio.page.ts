import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

  selected:string;
  productName:string;

  constructor() {}

  select(){
    console.log(this.selected)
    // mandar el this.selected a la funcion de servicio
  }
  changeName(){
    console.log(this.productName)
  }

}
