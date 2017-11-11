import { ItemPedidoDAO } from './../../DAO/ItemPedidoDAO';
import { ItensTempDAO } from './../../DAO/ItensTempDAO';
import { ProdutoDAO } from './../../DAO/ProdutoDAO';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class Produtos {

  produtos: any;
  callback: any;
  quantidade: number = 1;
  produto: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoDAO: ProdutoDAO,
    public itemPedido: ItemPedidoDAO,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.produtoDAO.ObterProduto().then((data) => {
      this.produtos = data;
    })

  }

  onClicarProduto(produto) {
    this.produto = produto;
    this.presentPrompt();

  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Quantos itens?',
      inputs: [
        {
          name: 'quantidade',
          placeholder: 'quantidade'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          handler: data => {
            return;
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            this.quantidade = Number.parseInt(data.quantidade);

            var item = {
              codProduto: this.produto.codigo,
              descricao: this.produto.descricao,
              quantidade: this.quantidade,
              valorUnitario: this.produto.valor,
              valoTotal: Number.parseInt(this.produto.valor) * this.quantidade
            }

            this.itemPedido.adicionarItem(item);
            this.navCtrl.pop();
            alert.dismiss();

          }
        }
      ]
    });
    alert.present();
  }
}





