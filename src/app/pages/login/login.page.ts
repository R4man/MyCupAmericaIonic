import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/shared/classe.usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public baseService: BaseService,
    // tslint:disable-next-line: align
    private httpClient: HttpClient,
    // tslint:disable-next-line: align
    private nav: NavController) {

  }
  saudacoes: string;
  login: string;
  senha: string;

  enviar() {
    const url = this.baseService.baseURL + '/login/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, { 'nickname': this.login, 'senha': this.senha }).subscribe(
      (retorno: any) => {
        const pessoas = retorno.pessoas;
        const pessoaDict = pessoas;
        const pessoa = new Usuario(pessoaDict.nickname,
          pessoaDict.nome,
          pessoaDict.saldo);
        this.baseService.usuario = pessoa;
        this.nav.navigateForward('/data-jogos');
      }, (error: any) => {
        console.log('deu certo');
      });
  }


  ngOnInit() {
  }



  ionViewWillEnter() {
    this.baseService.header = true;
    const hora = new Date().getHours();
    if (hora < 12 && hora > 5) {
      this.saudacoes = 'Bom dia!';
    } else if (hora > 12) {
      this.saudacoes = 'Boa tarde!';
    } else {
      this.saudacoes = 'Boa noite!';
    }
  }

  ionViewDidEnter() {
    this.baseService.home = false;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.loading = true;
  }
}
