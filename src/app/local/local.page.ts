import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { LocalCepService, Revendedor } from '../local-cep.service';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DetailsModalComponent } from '../component/details-modal/details-modal.component';



@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})

export class LocalPage {
  public revendedores: Revendedor [];
 
  public revendedorStream: Observable<Revendedor[]>;
  public search = '';
  public searchStream = new BehaviorSubject('');

  constructor(private localCepService: LocalCepService,
              private modalController: ModalController,
              private routerOutlet: IonRouterOutlet) 
              {
              this.revendedores = this.localCepService.revendedores;
              }
 
    public async openModal(selectedRevendedor: Revendedor) {
    const modal = await this.modalController.create({
    swipeToClose: true,
    presentingElement: this.routerOutlet.nativeEl,
    component: DetailsModalComponent,
    componentProps: {
    revendedor: selectedRevendedor
    }
  });
  modal.present();
}
}

let map;

const loader = new Loader({
  apiKey: "AIzaSyAbPVxcbrftQmbsXTWpbEwZgShLtJIP6MA",
  version: "weekly",
});

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {  lat: -23.471965427996505, lng: -46.73679764945249 },
    zoom: 8,
  });
});

function openModal(selectedRevendedor: any, Revendedor: any) {
  throw new Error('Function not implemented.');
}
