import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormaPagamento } from './forma-pagamento';

@NgModule({
  declarations: [
    FormaPagamento,
  ],
  imports: [
    IonicPageModule.forChild(FormaPagamento),
  ],
})
export class FormaPagamentoModule {}
