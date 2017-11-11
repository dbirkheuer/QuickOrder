import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoCliente } from './novo-cliente';

@NgModule({
  declarations: [
    NovoCliente,
  ],
  imports: [
    IonicPageModule.forChild(NovoCliente),
  ],
})
export class NovoClienteModule {}
