import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfumaria', url: '/folder/Perfumaria' },
    { title: 'Perfumaria Masculina', url: '/folder/PerfumariaMasculina' },
    { title: 'Perfumaria Feminina', url: '/folder/PerfumariaFeminina' },
    { title: 'Perfumaria Infantil', url: '/folder/PerfumariaInfantil' },
    { title: 'Aromatizador', url: '/folder/Aromatizador' },
    { title: 'Aromatizador Ambiente', url: '/folder/AromatizadorAmbiente' },
    { title: 'Aromatizador Automotivo', url: '/folder/AromatizadorAutomotivo' },
    { title: 'Pedidos', url: '/folder/Pedidos' },
    { title: 'Encontrar Revendedor', url: '/folder/EncontrarRevendedor' },
  ];
  
  constructor() {}
}
