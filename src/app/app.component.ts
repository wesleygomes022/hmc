import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfumaria', url: '/folder/Inbox' },
    { title: 'Perfumaria Masculina', url: '/folder/PerfumariaMasculina' },
    { title: 'Perfumaria Feminina', url: '/folder/PerfumariaFeminina' },
    { title: 'Perfumaria Infantil', url: '/folder/PerfumariaInfantil' },
    { title: 'Aromatizador', url: '/folder/Aromatizador' },
    { title: 'Aromatizador Ambiente', url: '/folder/AromatizadorAmbiente' },
    { title: 'Aromatizador Automotivo', url: '/folder/AromatizadorAutomotivo' },
    
  ];
  
  constructor() {}
}
