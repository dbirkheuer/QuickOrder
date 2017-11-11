import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPedidoCadastro } from './tabs-pedido-cadastro';

@NgModule({
  declarations: [
    TabsPedidoCadastro,
  ],
  imports: [
    IonicPageModule.forChild(TabsPedidoCadastro),
  ]
})
export class TabsPedidoCadastroModule {}
