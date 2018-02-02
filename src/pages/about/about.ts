import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data = [];

  constructor(private barcodeScanner:BarcodeScanner, public navCtrl: NavController) {}

  scan(){
    this.barcodeScanner.scan().then((barcodeData) =>{
       // Success ! Barcode data is here
       this.data.push(barcodeData.text);
    },(err) => {
        // An error occured
    });
  }

}
