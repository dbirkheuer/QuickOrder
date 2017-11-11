import { FormaPagamentoDAO } from './../../DAO/FormaPagamentoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-forma-pagamento',
  templateUrl: 'forma-pagamento.html',
})
export class FormaPagamento {

  callback: any;
  formaPagamentos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formaPagamentoDAO: FormaPagamentoDAO) {
  }

  ionViewDidLoad() {
    this.formaPagamentoDAO.ObterFormaPagamento().then((data) => {
      this.formaPagamentos = data;
    })
  }

  onClicarFormaPagamento(formaPagamento) {
    this.callback = this.navParams.get("callbackFormaPagamentoSelecionado");
    this.callback(formaPagamento);
    this.navCtrl.pop();
  }


}
