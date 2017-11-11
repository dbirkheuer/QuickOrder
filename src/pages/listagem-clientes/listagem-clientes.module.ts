import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemClientes } from './listagem-clientes';

@NgModule({
  declarations: [
    ListagemClientes,
  ],
  imports: [
    IonicPageModule.forChild(ListagemClientes),
  ],
})
export class ListagemClientesModule {}
