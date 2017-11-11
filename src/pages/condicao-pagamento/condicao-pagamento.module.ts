import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CondicaoPagamento } from './condicao-pagamento';

@NgModule({
  declarations: [
    CondicaoPagamento,
  ],
  imports: [
    IonicPageModule.forChild(CondicaoPagamento),
  ],
})
export class CondicaoPagamentoModule {}
