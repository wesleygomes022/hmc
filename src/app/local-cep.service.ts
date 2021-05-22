import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

export interface Revendedor{
  cep: string;
  name: string;
  phone: string;
  distance: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalCepService {

  public revendedores: Revendedor[] = [
    { cep: '02440-070', name: 'Ana Machado', phone: '(11)98877-6655', distance: '1.3km' },
    { cep: '024040-070', name: 'Jorge Oliveira Junior', phone: '(11)96655-8877', distance: '2.1km' },
    { cep: '03118-040', name: 'Roberto da Silva Santos', phone: '(11)91122-3344', distance: '10km'},
    { cep: '03118-040', name: 'Marcela Ferraz Barbosa', phone: '(11)93344-1122', distance: '7.3km'}
  ] 

  public getLocalByCep(cep:string){
    return {...this.revendedores.find( r => r.cep === cep)}
  }

  constructor() { }
}
