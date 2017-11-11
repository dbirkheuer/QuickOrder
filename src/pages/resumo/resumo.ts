import { Pedidos } from './../pedidos/pedidos';
import { HomePage } from './../home/home';
import { CondicaoPagamento } from './../condicao-pagamento/condicao-pagamento';
import { VarPedido } from './../../GlobalVars/varPedido';
import { TabsPedidoCadastro } from './../tabs-pedido-cadastro/tabs-pedido-cadastro';
import { Dados } from './../dados/dados';
import { PedidoDAO } from './../../DAO/PedidoDAO';
import { ItemPedidoDAO } from './../../DAO/ItemPedidoDAO';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class Resumo {

  public valorTotal: number = 0;
  public valoCadaItem: number = 0;
  public labelValorTotal: any;

  public abaDados: Dados;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemPedido: ItemPedidoDAO,
    public pedido: PedidoDAO,
    private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {


  }

  onClicarEmSalvar() {
    if (Dados.objTipoPedido == null) {
      this.mostrarAlertaNull("Tipo de pedido precisa ser preenchido");
      return;
    }

    if (Dados.objCliente == null) {
      this.mostrarAlertaNull("Cliente precisa ser preenchido");
      return;
    }
    if (Dados.objListaPreco == null) {
      this.mostrarAlertaNull("Lista de preço precisa ser preenchido");
      return;
    }
    if (Dados.objCondicaoPagamento == null) {
      this.mostrarAlertaNull("Condição de pagaemnto precisa ser preenchido");
      return;
    }

    if (Dados.objFormaPagamento == null) {
      this.mostrarAlertaNull("Forma de pagaemnto precisa ser preenchido");
      return;
    }

    if (TabsPedidoCadastro.valorTotal == 0) {
      this.mostrarAlertaNull("Adicione itens ao pedido!");
      return;
    }

    this.salvarPedido();
    
  }


  salvarPedido() {
    var ped = {
      codCliente: Dados.objCliente.codigo,
      nomeCliente: Dados.objCliente.nome,
      codCondicaoPagamento: Dados.objCondicaoPagamento.codigo,
      codListaPreco: Dados.objListaPreco.codigo,
      codFormaPagamento: Dados.objFormaPagamento.codigo,
      codTipoPedido: Dados.objTipoPedido.codigo,
      valorTotal: TabsPedidoCadastro.valorTotal

    }
    this.pedido.adicionarPedido(ped);
    this.mostrarAlertaNull("Pedido cadastrado com sucesso!");
    

  }

  mostrarAlertaNull(mensagem: string) {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: mensagem,
      buttons: [{
        text: 'Ok',

      }

      ]
    });
    alert.present();
  }

}








