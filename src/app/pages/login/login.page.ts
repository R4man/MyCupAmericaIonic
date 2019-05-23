import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private baseService: BaseService) {

  }

  clicou() {
    console.log('clicou');

  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }

}
