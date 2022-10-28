import { Component } from '@angular/core';
import { ServiciosService } from '../servicio/servicios.service';
@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

  selected:string;
  productName:string;
  politica: any ={
    content:"polticas 4",
  }

  constructor(private serviciosService: ServiciosService) {}

  select(){
    console.log(this.selected)
    // mandar el this.selected a la funcion de servicio
  }

  searchName(){

  }

}
