import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Revendedor } from 'src/app/local-cep.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {

  @Input() revendedor: Revendedor;

  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }

}



 