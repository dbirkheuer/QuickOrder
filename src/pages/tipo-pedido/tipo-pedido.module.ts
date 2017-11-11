import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoPedido } from './tipo-pedido';

@NgModule({
  declarations: [
    TipoPedido,
  ],
  imports: [
    IonicPageModule.forChild(TipoPedido),
  ],
})
export class TipoPedidoModule {}
