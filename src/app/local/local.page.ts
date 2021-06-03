import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { LocalCepService } from '../local-cep.service';

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
  //public revendedor: Revendedor [] = this.localCepService;
  

  constructor(private localCepService: LocalCepService) { }

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