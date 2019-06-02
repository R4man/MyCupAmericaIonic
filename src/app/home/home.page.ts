import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public baseService: BaseService,
              private nav: NavController) {
  }


  ionViewDidEnter() {
    this.nav.navigateForward('/login');
    this.baseService.header = false;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.home = false;
  }

}
