import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

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

    {cep:'02440-070', name: 'Ana Machado', phone: '(11)98877-6655', distance: '1.3km'},
    {cep:'02440-070', name: 'Jorge Oliveira Junior', phone: '(11)96655-8877', distance: '2.1 km'},
    {cep:'03118-040', name: 'Marcelo Alcantara', phone: '(11)1122-3344', distance: '7.0km'},
    {cep:'03118-040', name: 'Luciana Pereira', phone: '(11)3344-1122', distance: '10.1km'}
  ]

  //private revendedores: Revendedor[] = [];
  private revendedorSubject: BehaviorSubject<Revendedor[]> = new BehaviorSubject([]);
  public revendedorStream = this.revendedorSubject.asObservable();

  constructor (private storage: Storage) { 
    this.loadFromStorage();
  }
  
  public addRevendedor(newRevendedor: Revendedor){
    this.revendedores.push(newRevendedor);
    this.saveAtStorage();
  }

  private async loadFromStorage(){
    const loadedRevendedor : Revendedor[] | null = await this.storage.get('revendedores');
    if (loadedRevendedor){
      this.revendedores.push(...loadedRevendedor);
    }
  }

  private saveAtStorage (){
    this.storage.set('revendedores', this.revendedores);
  }

  public findRevendedorByCep(cep:string){
    return {...this.revendedores.find( r => r.cep === cep)}
  }

 
  }
