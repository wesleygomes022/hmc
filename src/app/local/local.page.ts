import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { LocalCepService } from '../local-cep.service';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DetailsModalComponent } from '../component/details-modal/details-modal.component';


export interface Revendedor{
  cep: string;
  name: string;
  phone: string;
  distance: string;
}

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})

export class LocalPage {
  //public revendedores: Revendedor [] = this.localCepService;
  public revendedores: Revendedor[] = [

    {cep:'02440-070', name: 'Ana Machado', phone: '(11)98877-6655', distance: '1.3km'},
    {cep:'02440-070', name: 'Jorge Oliveira Junior', phone: '(11)96655-8877', distance: '2.1 km'},
    {cep:'03118-040', name: 'Marcelo Alcantara', phone: '(11)1122-3344', distance: '7.0km'},
    {cep:'03118-040', name: 'Luciana Pereira', phone: '(11)3344-1122', distance: '10.1km'}
  ]
 
  
  public revendedorStream: Observable<Revendedor[]>;
  public search = '';
  public searchStream = new BehaviorSubject('');

  constructor(private localCepService: LocalCepService,
              private modalController: ModalController,
              private routerOutlet: IonRouterOutlet,) {}
 
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
