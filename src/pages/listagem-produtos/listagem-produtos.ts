import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-listagem-produtos',
  templateUrl: 'listagem-produtos.html',
})
export class ListagemProdutos {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListagemProdutos');
  }

}
