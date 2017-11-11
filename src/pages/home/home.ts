import { VarPedido } from './../../GlobalVars/varPedido';
import { TabsPedidoCadastro } from './../tabs-pedido-cadastro/tabs-pedido-cadastro';
import { Sincronizacao } from './../sincronizacao/sincronizacao';
import { Produtos } from './../produtos/produtos';
import { Pedidos } from './../pedidos/pedidos';
import { NovoPedido } from './../novo-pedido/novo-pedido';
import { ListagemClientes } from './../listagem-clientes/listagem-clientes';
import { ClienteDAO } from './../../DAO/ClienteDAO';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  varPedido: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onClicarEmNovoPedido(): void {
    this.navCtrl.push(TabsPedidoCadastro);
  }

  onClicarEmPedidos(): void {
    this.navCtrl.push(Pedidos)
  }

  onClicarEmClientes(): void {
    this.navCtrl.push(ListagemClientes);
  }

  onClicarEmProdutos(): void {
    this.navCtrl.push(Produtos)
  }

  onClicarEmSair(): void {

  }
}
