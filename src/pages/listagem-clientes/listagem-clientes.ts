import { NovoCliente } from './../novo-cliente/novo-cliente';
import { ClienteDAO } from './../../DAO/ClienteDAO';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { Component, NgZone } from '@angular/core';


@Component({
  selector: 'page-ListagemClientes',
  templateUrl: 'listagem-clientes.html',
})
export class ListagemClientes {

  clientes: any;
  posts: any;

  constructor(private clienteDAO: ClienteDAO,
    private nav: NavController,
    private platform: Platform,
    private zone: NgZone,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.clienteDAO.ObterCliente().then((data) => {
      this.posts = data;
    });


  }
  onClicarNovoCliente(): void {
    this.nav.push(NovoCliente);
  }




}
