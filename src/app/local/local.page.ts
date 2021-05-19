import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  constructor() { }

  ngOnInit() {
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