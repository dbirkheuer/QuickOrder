import { ItemPedidoDAO } from './../../DAO/ItemPedidoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Resumo } from './../resumo/resumo';
import { Itens } from './../itens/itens';
import { Dados } from './../dados/dados';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs-pedido-cadastro',
  templateUrl: 'tabs-pedido-cadastro.html'
})
export class TabsPedidoCadastro {

  tab1Root: any = Dados;
  tab2Root: any = Itens;
  tab3Root: any = Resumo;

  static valorTotal: number = 0;
  public valoCadaItem: number = 0;
  public labelValorTotal: any;

  public labelTipoPedido: any;
  public labelCliente: any;
  public labelListaPreco: any;
  public labelCondicaPagamento: any;
  public labelFormaPagamento: any;

  static quantidadeItens: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemPedido: ItemPedidoDAO) { }


  onClicarAbaResumo() {
    this.itemPedido.ObterItens().then((data) => {
      this.valoCadaItem = 0;
      TabsPedidoCadastro.valorTotal = 0;

      for (let item of data) {
        this.valoCadaItem = Number.parseInt(item.valorUnitario) * Number.parseInt(item.quantidade);
        TabsPedidoCadastro.valorTotal = TabsPedidoCadastro.valorTotal + this.valoCadaItem;
        
      }

      this.labelValorTotal = document.getElementById('labelValorTotal');
      this.labelValorTotal.innerText = "Valor total do pedido: R$ " + TabsPedidoCadastro.valorTotal;

      this.labelTipoPedido = document.getElementById('labelTipoPedido');
      if (Dados.objTipoPedido != null) {
        this.labelTipoPedido.innerText = "Tipo de pedido: " + Dados.objTipoPedido.descricao;
      } else {
        this.labelTipoPedido.innerText = "Tipo de pedido: ";
      }


      this.labelCliente = document.getElementById('labelCliente');
      if (Dados.objCliente != null) {
        this.labelCliente.innerText = "Cliente: " + Dados.objCliente.nome;
      } else {
        this.labelCliente.innerText = "Cliente: ";
      }

      this.labelListaPreco = document.getElementById('labelListaPreco');
      if (Dados.objCliente != null) {
        this.labelListaPreco.innerText = "Lista de preço: " + Dados.objListaPreco.descricao;
      } else {
        this.labelListaPreco.innerText = "Lista de preço: ";
      }

      this.labelCondicaPagamento = document.getElementById('labelCondicaoPagamento');
      if (Dados.objCliente != null) {
        this.labelCondicaPagamento.innerText = "Condição: " + Dados.objCondicaoPagamento.descricao;
      } else {
        this.labelCondicaPagamento.innerText = "Condição: ";
      }

      this.labelFormaPagamento = document.getElementById('labelFormaPagamento');
      if (Dados.objCliente != null) {
        this.labelFormaPagamento.innerText = "Forma: " + Dados.objFormaPagamento.descricao;
      } else {
        this.labelFormaPagamento.innerText = "Forma: ";
      }

    })
  }

}


