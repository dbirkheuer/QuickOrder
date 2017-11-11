import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sincronizacao } from './sincronizacao';

@NgModule({
  declarations: [
    Sincronizacao,
  ],
  imports: [
    IonicPageModule.forChild(Sincronizacao),
  ],
})
export class SincronizacaoModule {}
