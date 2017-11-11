import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoPedido } from './novo-pedido';

@NgModule({
  declarations: [
    NovoPedido,
  ],
  imports: [
    IonicPageModule.forChild(NovoPedido),
  ],
})
export class NovoPedidoModule {}
