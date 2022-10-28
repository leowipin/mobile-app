import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ServiciosService } from '../servicio/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild(IonModal) password_recovery_modal: IonModal;

  email: string;
  password: string;
  emailRecovery: string;
  client: any;
  values: string[]
  /*client: any = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    gender: 0,
    date_of_birthday: "1999-01-02",
    state: 1,
    user: "",
    date_register: "2022-10-25",
    date_modify: "2022-10-25",
    longitude_home: 0.0,
    latitude_home: 0.0,
    date_start: "2022-10-25"
  }*/

  constructor(private serviciosService: ServiciosService, private router:Router) { }

  ngOnInit() {
    
  }

  enter(){
    this.serviciosService.getClient(this.email).subscribe(data=>{
      this.client = data as any;
      if(Object.keys(this.client).length == 0){
        console.log(data)
        console.log("contraseña o correo incorrectos")
      } else if(this.client.cliente.email === this.email){
        if(this.client.cliente.password === this.password){
          this.router.navigate(['tabs'])
        }else{
          console.log("contraseña o correo incorrectos")
        }
      } else{
        console.log(this.client)
        console.log(this.client.cliente.email)
        console.log(this.email)
        console.log("contraseña o correo incorrectos")
      }
    })
  }

  cancel() {
    this.password_recovery_modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.emailRecovery)
    this.password_recovery_modal.dismiss(this.emailRecovery, 'confirm');
    
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }

  showInput(input){
    console.log(input)
  }

}
