import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private baseService: BaseService,
              private nav: NavController) {
  }

  clicou() {
    this.nav.navigateForward('/login');
  }


  ionViewDidEnter() {
    this.baseService.loading = false;
  }

}
