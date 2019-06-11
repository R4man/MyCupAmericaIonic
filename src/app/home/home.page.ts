import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
    if (this.baseService.usuario != null) {
      this.nav.navigateForward('/data-jogos');
    } else {
      this.nav.navigateForward('/login');
    }
  }

  constructor(public baseService: BaseService,
              private nav: NavController) {
  }

  ionViewDidEnter() {
    this.baseService.header = false;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.home = false;
  }

}
