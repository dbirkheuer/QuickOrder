import { ListagemClientesParaPedido } from './../listagem-clientes-para-pedido/listagem-clientes-para-pedido';
import { TipoPedido } from './../tipo-pedido/tipo-pedido';
import { FormaPagamento } from './../forma-pagamento/forma-pagamento';
import { CondicaoPagamento } from './../condicao-pagamento/condicao-pagamento';
import { ListaPreco } from './../lista-preco/lista-preco';
import { PedidoDAO } from './../../DAO/PedidoDAO';
import { ListagemClientes } from './../listagem-clientes/listagem-clientes';
import { Produtos } from './../produtos/produtos';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-novo-pedido',
  templateUrl: 'novo-pedido.html',
})
export class NovoPedido {

  tipoPedido: any;
  cliente: any;
  listaPreco: any;
  condicaoPagamento: any;
  formaPagamento: any;
  valorTotalPedido: any;
  produtos: any;

  constructor(
    public pedidoDAO: PedidoDAO,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  onClicarTipoPedido() {
    this.navCtrl.push(TipoPedido)
  }

  onClicarCliente() {
    this.navCtrl.push(ListagemClientesParaPedido);
  }

  onClicarListaPreco() {
    this.navCtrl.push(ListaPreco);
  }

  onClicarCondicaoPagamento() {
    this.navCtrl.push(CondicaoPagamento);
  }

  onClicarFormaPagamento() {
    this.navCtrl.push(FormaPagamento);
  }

  onClicarProdutos() {
    this.navCtrl.push(Produtos);
  }

  onClicarEmSalvar() {
    this.pedidoDAO.adicionarPedido({
      codTipoPedido: this.tipoPedido,
      codCliente: this.cliente,
      codlistaPreco: this.listaPreco,
      codCondicaoPagamento: this.condicaoPagamento,
      codFormaPagamento: this.formaPagamento
    });

  }
}
