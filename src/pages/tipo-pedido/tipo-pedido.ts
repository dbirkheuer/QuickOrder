import { TipoPedidoDAO } from './../../DAO/TipoPedidoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tipo-pedido',
  templateUrl: 'tipo-pedido.html',
})
export class TipoPedido {

  callback: any;
  tipoPedidos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tipoPedidoDAO: TipoPedidoDAO) {
  }

  ionViewDidLoad() {
    this.tipoPedidoDAO.ObterTipoPedido().then((data) => {
      this.tipoPedidos = data;
    })
  }

  onClicarTipoPedido(tipoPedido) {
    this.callback = this.navParams.get("callbackTipoPedidoSelecionado");
    this.callback(tipoPedido);
    this.navCtrl.pop();
  }

  

}
