import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private baseService: BaseService) {

  }

  clicou() {
    console.log(this.baseService.dataAtual);
  }

  ionViewDidEnter() {
    this.baseService.header = true;
    this.baseService.loading = false;
  }

}
