import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ServiciosService } from '../servicio/servicios.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild(IonModal) password_recovery_modal: IonModal;

  name: string;
  client: any[]

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
    this.serviciosService.getClient().subscribe(data=>{
      this.client = data as any[];
      console.log(this.client);
    })
  }

  cancel() {
    this.password_recovery_modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.password_recovery_modal.dismiss(this.name, 'confirm');
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
