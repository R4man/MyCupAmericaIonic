import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public baseService: BaseService,
    // tslint:disable-next-line: align
    private nav: NavController,
    // tslint:disable-next-line: align
    private httpClient: HttpClient) {
  }

  ngOnInit() {
    if (this.baseService.usuario != null) {
      const url = this.baseService.baseURL + '/login/';
      // tslint:disable-next-line: object-literal-key-quotes
      this.httpClient.post<any>(url, { 'nickname': this.baseService.login, 'senha': this.baseService.senha }).subscribe(
        (retorno: any) => {
          console.log('dados corretos');
          this.nav.navigateForward('/data-jogos');
        }, (error: any) => {
          console.log('voltou pro login');
          this.nav.navigateForward('/login');
        });
    } else {
      console.log('foi direto pro login');
      this.nav.navigateForward('/login');
    }
  }



  ionViewDidEnter() {
    this.baseService.header = false;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.home = false;
  }

}
