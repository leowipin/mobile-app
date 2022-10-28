import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ServiciosService } from '../servicio/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  @ViewChild(IonModal) password_recovery_modal: IonModal;

  client: any = {
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
  } //crear intrefaz de cliente

  constructor(private serviciosService: ServiciosService, private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.serviciosService.registerClient(this.client).subscribe();
    this.router.navigate([''])
  }

  cancel() {
    this.password_recovery_modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.password_recovery_modal.dismiss('confirm');
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
