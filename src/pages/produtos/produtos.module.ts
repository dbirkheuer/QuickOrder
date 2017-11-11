import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Produtos } from './produtos';

@NgModule({
  declarations: [
    Produtos,
  ],
  imports: [
    IonicPageModule.forChild(Produtos),
  ],
})
export class ProdutosModule {}
