import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit() {
  constructor (private storage: Storage){}

  async ngOnInit() {
    await this.storage.create();
  }

  public appPages = [

    { title: 'Perfumaria'},
    { title: 'Perfumaria Masculina', url: '/folder/PerfumariaMasculina' },
    { title: 'Perfumaria Feminina', url: '/folder/PerfumariaFeminina' },
    { title: 'Perfumaria Infantil', url: '/folder/PerfumariaInfantil' },
    { title: 'Aromatizador'},
    { title: 'Aromatizador Ambiente', url: '/folder/AromatizadorAmbiente' },
    { title: 'Aromatizador Automotivo', url: '/folder/AromatizadorAutomotivo' },
    
  ];
  
  
}
