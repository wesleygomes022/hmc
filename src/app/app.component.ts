import { Component, NgModule, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor (private storage: Storage, public router: Router){}

  async ngOnInit() {
    await this.storage.create();
  }
  
}
