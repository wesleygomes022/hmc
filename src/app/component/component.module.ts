import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormComponent } from './form/form.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';


@NgModule({
  declarations: [FormComponent, DetailsModalComponent],
  exports: [FormComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule
    
  ],
  
})
export class ComponentPageModule {}
