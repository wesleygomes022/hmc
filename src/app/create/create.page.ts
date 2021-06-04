import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { timeStamp } from 'node:console';
import { LocalCepService, Revendedor } from '../local-cep.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  public newRevendedor: Revendedor = {
    cep: ' ',
    name: ' ',
    phone: '',
    distance: ''
};

  constructor (private localcepservice: LocalCepService,
              private navController: NavController) { }

  addNewRevendedor(){
    this.localcepservice.addRevendedor(this.newRevendedor);
    this.navController.back();
    
  }
}
