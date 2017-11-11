import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemClientesParaPedido } from './listagem-clientes-para-pedido';

@NgModule({
  declarations: [
    ListagemClientesParaPedido,
  ],
  imports: [
    IonicPageModule.forChild(ListagemClientesParaPedido),
  ],
})
export class ListagemClientesParaPedidoModule {}
