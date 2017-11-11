import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoResumo } from './pedido-resumo';

@NgModule({
  declarations: [
    PedidoResumo,
  ],
  imports: [
    IonicPageModule.forChild(PedidoResumo),
  ],
})
export class PedidoResumoModule {}
