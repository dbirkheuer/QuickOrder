import { ItemPedidoDAO } from './../../DAO/ItemPedidoDAO';

import { ClienteDAO } from './../../DAO/ClienteDAO';
import { ListagemClientesParaPedido } from './../listagem-clientes-para-pedido/listagem-clientes-para-pedido';
import { FormaPagamento } from './../forma-pagamento/forma-pagamento';
import { CondicaoPagamento } from './../condicao-pagamento/condicao-pagamento';
import { TipoPedido } from './../tipo-pedido/tipo-pedido';
import { ListaPreco } from './../lista-preco/lista-preco';
import { ListagemClientes } from './../listagem-clientes/listagem-clientes';
import { NavController, NavParams } from 'ionic-angular';
import { PedidoDAO } from './../../DAO/PedidoDAO';
import { Component } from '@angular/core';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class Dados {

  static objTipoPedido: any = null;
  public btnTipoPedido: any;
  public nomeTipoPedidoNoBotao: string;

  static objCliente: any = null;
  public btnCliente: any;
  public nomeClienteNoBotao: string;

  static objListaPreco: any = null;
  public btnListaPreco: any;
  public nomeListaPrecoNoBotao: string;

  static objCondicaoPagamento: any = null;
  public btnCondicaoPagamento: any;
  public nomeCondicaoPagamentoNoBotao: string;

  static objFormaPagamento: any = null;
  public btnFormaPagamento: any;
  public nomeFormaPagamentoNoBotao: string;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemPedido: ItemPedidoDAO

  ) {
  }

  ionViewDidLoad() {
    this.itemPedido.deletarTodosRegistros();
  }

  public onClicarTipoPedido() {
    this.navCtrl.push(TipoPedido, {
      callbackTipoPedidoSelecionado: this.callbackTipoPedidoSelecionado
    });
  }

  callbackTipoPedidoSelecionado = function (retorno) {
    return new Promise((resolve, reject) => {
      Dados.objTipoPedido = retorno;
      this.btnTipoPedido = document.getElementById('btnTipoPedido');
      this.nomeTipoPedidoNoBotao = Dados.objTipoPedido.descricao;
      this.btnTipoPedido.innerText = this.nomeTipoPedidoNoBotao;
    });
  }

  public onClicarCliente() {
    this.navCtrl.push(ListagemClientesParaPedido, {
      callbackClienteSelecionado: this.callbackClienteSelecionado
    });
  }

  callbackClienteSelecionado = function (retorno) {
    return new Promise((resolve, reject) => {
      Dados.objCliente = retorno;
      this.clienteTeste = Number.parseInt(Dados.objCliente.codigo);
      this.btnCliente = document.getElementById('btnCliente');
      this.nomeClienteNoBotao = Dados.objCliente.codigo + " - " + Dados.objCliente.nome;
      this.btnCliente.innerText = this.nomeClienteNoBotao;


    });
  }

  public onClicarListaPreco() {
    this.navCtrl.push(ListaPreco, {
      callbackListaPrecoSelecionado: this.callbackListaPrecoSelecionado
    });
  }

  callbackListaPrecoSelecionado = function (retorno) {
    return new Promise((resolve, reject) => {
      Dados.objListaPreco = retorno;
      this.btnListaPreco = document.getElementById('btnListaPreco');
      this.nomeListaPrecoNoBotao = Dados.objListaPreco.descricao;
      this.btnListaPreco.innerText = this.nomeListaPrecoNoBotao;
    });
  }

  public onClicarCondicaoPagamento() {
    this.navCtrl.push(CondicaoPagamento, {
      callbackCondicaoPagamentoSelecionado: this.callbackCondicaoPagamentoSelecionado
    });
  }

  callbackCondicaoPagamentoSelecionado = function (retorno) {
    return new Promise((resolve, reject) => {
      Dados.objCondicaoPagamento = retorno;
      this.btnCondicaoPagamento = document.getElementById('btnCondicaoPagamento');
      this.nomeCondicaoPagamentoNoBotao = Dados.objCondicaoPagamento.descricao;
      this.btnCondicaoPagamento.innerText = this.nomeCondicaoPagamentoNoBotao;
    });
  }

  public onClicarFormaPagamento() {
    this.navCtrl.push(FormaPagamento, {
      callbackFormaPagamentoSelecionado: this.callbackFormaPagamentoSelecionado
    });
  }

  callbackFormaPagamentoSelecionado = function (retorno) {
    return new Promise((resolve, reject) => {
      Dados.objFormaPagamento = retorno;
      this.btnFormaPagamento = document.getElementById('btnFormaPagamento');
      this.nomeFormaPagamentoNoBotao = Dados.objFormaPagamento.descricao;
      this.btnFormaPagamento.innerText = this.nomeFormaPagamentoNoBotao;
    });
  }
}
