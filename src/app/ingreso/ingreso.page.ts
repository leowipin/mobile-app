import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ServiciosService } from '../servicio/servicios.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild(IonModal) password_recovery_modal: IonModal;

  emailRecovery: string;
  values: string[]
  client:User = {
    name:"",
    lastname:"",
    email:"",
    password:"",
    phone:"",
    gender:0,
    civil_status:0,
    birthday: new Date(),
    status:0,
    dni:"",
    role:"cliente",
  };
  arrayDataClient:string[];
  confirmationMessage:string;

  constructor(private serviciosService: ServiciosService, private router:Router) { }

  ngOnInit() {
    
  }

  login(){
    this.serviciosService.loginClient(this.client).subscribe()
  }

  cancel() {
    this.password_recovery_modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.password_recovery_modal.dismiss(this.emailRecovery, 'confirm');
    console.log(this.emailRecovery)
    this.serviciosService.recoveryPassword(this.emailRecovery).subscribe(data=>{
      this.confirmationMessage = data as string
      console.log(this.confirmationMessage)
    })
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
