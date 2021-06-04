import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RevendedorFormComponent } from './revendedor-form/revendedor-form.component';
import { DetailsModalComponent } from '../component/details-modal/details-modal.component';



@NgModule({
  declarations: [RevendedorFormComponent, DetailsModalComponent],
  exports: [RevendedorFormComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
    
  ],
  
})
export class ComponentModule {}