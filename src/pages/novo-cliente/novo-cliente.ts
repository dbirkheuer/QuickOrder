import { ClienteDAO } from './../../DAO/ClienteDAO';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoCliente {

  cliente: any;
  nome: any;
  codigo: any;
  cpfCnpj: any;

  constructor(private viewCtrl: ViewController,
    private navParams: NavParams,
    public alertCtrl: AlertController,
    private clienteDAO: ClienteDAO) {
  }

  ionViewDidLoad() {
  }

  onClicarEmSalvar() {
    this.clienteDAO.adicionarCliente({
      nome: this.nome,
      cpfCnpj: this.cpfCnpj,
      codigo: this.codigo
    });

    this.mostrarAlerta();


  }

  mostrarAlerta() {
    let alert = this.alertCtrl.create({
      title: 'Cliente cadastrado!',
      subTitle: "O cliente " + this.nome + " foi cadastrado com sucesso!",
      buttons: ['Obrigado!']
    });
    alert.present();
    this.viewCtrl.dismiss();
  }
}
