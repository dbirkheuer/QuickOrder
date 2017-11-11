import { CondicaoPagamentoDAO } from './../../DAO/CondicaoPagamentoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-condicao-pagamento',
  templateUrl: 'condicao-pagamento.html',
})
export class CondicaoPagamento {

  callback: any;
  condicaoPagamentos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public condicaoPagamentoDAO: CondicaoPagamentoDAO) {
  }

  ionViewDidLoad() {
    this.condicaoPagamentoDAO.ObterCondicaoPagamento().then((data) => {
      this.condicaoPagamentos = data;
    })
  }

  onClicarCondicaoPagamento(condicaoPagamento) {
    this.callback = this.navParams.get("callbackCondicaoPagamentoSelecionado");
    this.callback(condicaoPagamento);
    this.navCtrl.pop();
  }


}