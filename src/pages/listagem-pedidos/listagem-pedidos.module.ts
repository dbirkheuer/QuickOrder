import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemPedidos } from './listagem-pedidos';

@NgModule({
  declarations: [
    ListagemPedidos,
  ],
  imports: [
    IonicPageModule.forChild(ListagemPedidos),
  ],
})
export class ListagemPedidosModule {}
