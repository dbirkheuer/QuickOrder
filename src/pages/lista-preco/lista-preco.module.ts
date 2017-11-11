import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPreco } from './lista-preco';

@NgModule({
  declarations: [
    ListaPreco,
  ],
  imports: [
    IonicPageModule.forChild(ListaPreco),
  ],
})
export class ListaPrecoModule {}
