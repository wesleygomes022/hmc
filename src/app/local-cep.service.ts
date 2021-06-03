import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
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

  private revendedores: Revendedor[] = [];
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
