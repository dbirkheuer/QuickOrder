import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-sincronizacao',
  templateUrl: 'sincronizacao.html',
})
export class Sincronizacao {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincronizacao');
  }

}
