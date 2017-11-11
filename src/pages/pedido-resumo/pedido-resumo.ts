import { TipoPedidoDAO } from './../../DAO/TipoPedidoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-pedido-resumo',
  templateUrl: 'pedido-resumo.html',
})
export class PedidoResumo {

  public pedido: any;
  public labelTipoPedido: any;
  public labelCliente: any;
  public labelListaPreco: any;
  public labelCondicaoPagamento: any;
  public labelFormaPagamento: any;
  public labelValorTotal: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tipoPedido: TipoPedidoDAO) {
  }

  ionViewDidLoad() {
    this.pedido = this.navParams.get('pedido');
    console.log(this.pedido);

  }
}
