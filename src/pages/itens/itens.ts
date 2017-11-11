import { ItemPedidoDAO } from './../../DAO/ItemPedidoDAO';
import { ItensTempDAO } from './../../DAO/ItensTempDAO';
import { Produtos } from './../produtos/produtos';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html',
})
export class Itens {

  itens: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemPedido: ItemPedidoDAO) {

  }

  ionViewDidLoad() {
    this.itemPedido.ObterItens().then((data) => {
      this.itens = data;
    })
  }

  onClicarAdicionarItens() {
    this.navCtrl.push(Produtos, {
      callbackAdicionarItens: this.callbackAdicionarItens
    });
  }
  callbackAdicionarItens(retorno) {
    this.itemPedido.ObterItens().then((data) => {
      this.itens = data;
      console.log(this.itens);
    })
  }
}
