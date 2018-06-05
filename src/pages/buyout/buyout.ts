  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {

  itemName: string;
  itemQuantity: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemName = navParams.get('dataName');
    this.itemQuantity = navParams.get('dataQuantity');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  goToHomePage() {
    this.navCtrl.push(HomePage)
  }
}
