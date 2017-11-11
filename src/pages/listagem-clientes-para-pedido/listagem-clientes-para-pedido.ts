import { Dados } from './../dados/dados';
import { ClienteDAO } from './../../DAO/ClienteDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-listagem-clientes-para-pedido',
  templateUrl: 'listagem-clientes-para-pedido.html',
})
export class ListagemClientesParaPedido {

  cliente: any;
  clientes: any;
  callback: any;
  obj: Array<String>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clienteDAO: ClienteDAO) {
  }

  ionViewDidLoad() {
    this.clienteDAO.ObterCliente().then((data) => {
      this.clientes = data;
    });

  }
  onClicarCliente(cliente) {
    this.callback = this.navParams.get("callbackClienteSelecionado");
    this.callback(cliente);
    this.navCtrl.pop();


  }
}
