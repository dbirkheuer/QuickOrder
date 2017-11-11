import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Itens } from './itens';

@NgModule({
  declarations: [
    Itens,
  ],
  imports: [
    IonicPageModule.forChild(Itens),
  ],
})
export class ItensModule {}
