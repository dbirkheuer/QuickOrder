import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemProdutos } from './listagem-produtos';

@NgModule({
  declarations: [
    ListagemProdutos,
  ],
  imports: [
    IonicPageModule.forChild(ListagemProdutos),
  ],
})
export class ListagemProdutosModule {}
