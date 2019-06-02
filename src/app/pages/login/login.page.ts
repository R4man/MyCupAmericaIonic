import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public baseService: BaseService,
              private httpClient: HttpClient,
              private nav: NavController) {

  }
  saudacoes: string;
  login: string;
  senha: string;

  enviar() {
    const url = this.baseService.baseURL + '/cadastro/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, { 'nickname': this.login, 'senha': this.senha }).subscribe(
      (retorno: any) => {
        console.log('deu certo');
      }, (error: any) => {
        this.nav.navigateForward('/data-jogos');
      });
  }


  ngOnInit() {
  }



  ionViewWillEnter() {
    if (new Date().getHours() < 12 && new Date().getHours() > 5) {
      this.saudacoes = 'Bom dia!';
    } else if (new Date().getHours() > 12 && new Date().getHours() < 5) {
      this.saudacoes = 'Boa tarde!';
    } else {
      this.saudacoes = 'Boa noite!';
    }
  }
  ionViewDidEnter() {
    this.baseService.header = true;
    this.baseService.home = false;
    this.baseService.loading = false;
  }

}
