import { PedidoResumo } from './../pedido-resumo/pedido-resumo';
import { PedidoDAO } from './../../DAO/PedidoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class Pedidos {

  public pedidos: any;
  public linhaCliente: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pedido: PedidoDAO) {
  }


  ionViewDidLoad() {
    this.pedido.ObterCliente().then((data) => {
      this.pedidos = data;
    })
  }

  
}
