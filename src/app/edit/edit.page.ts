import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalCepService, Revendedor } from '../local-cep.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  public revendedores: Revendedor;
  private cep: string;

  constructor (route: ActivatedRoute,
              private localcepservice: LocalCepService,
              private navController: NavController) 
{ 
 this.cep = route.snapshot.paramMap.get('cep');
 this.revendedores = this.localcepservice.findRevendedorByCep(this.cep);
              }


  

}
