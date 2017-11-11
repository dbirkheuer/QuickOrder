import { ListaPrecoDAO } from './../../DAO/ListaPrecoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-lista-preco',
  templateUrl: 'lista-preco.html',
})
export class ListaPreco {

  callback: any;
  listaPrecos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listaPrecoDAO: ListaPrecoDAO) {
  }

ionViewDidLoad() {
  this.listaPrecoDAO.ObterListaPreco().then((data) => {
    this.listaPrecos = data;
  })
}

onClicarListaPreco(listaPreco) {
  this.callback = this.navParams.get("callbackListaPrecoSelecionado");
  this.callback(listaPreco);
  this.navCtrl.pop();
}

}
