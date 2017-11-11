import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-listagem-pedidos',
  templateUrl: 'listagem-pedidos.html',
})
export class ListagemPedidos {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListagemPedidos');
  }

}
