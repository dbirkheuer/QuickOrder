import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Resumo } from './resumo';

@NgModule({
  declarations: [
    Resumo,
  ],
  imports: [
    IonicPageModule.forChild(Resumo),
  ],
})
export class ResumoModule {}
