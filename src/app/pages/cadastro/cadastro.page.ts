import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { NavController, ModalController } from '@ionic/angular';
import { ModalAvisoPage } from '../modal-aviso/modal-aviso.page';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private baseService: BaseService,
    // tslint:disable-next-line: align
    private nav: NavController,
    // tslint:disable-next-line: align
    private httpClient: HttpClient,
    // tslint:disable-next-line: align
    private modalavisoController: ModalController) { }

  nome: string;
  nickname: string;
  email: string;
  cidade: string;
  pais: string;
  estado: string;
  sexo: string;
  idade: string;
  senha: string;
  senha2: string;
  sex: string;



  cadastrar() {
    if (this.sexo === 'Masculino') {
      this.sex = 'M';
    } else if (this.sexo === 'Feminino') {
      this.sex = 'F';
    } else {
      this.sex = 'O';
    }
    const url = this.baseService.baseURL + '/cadastrar/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, {
      // tslint:disable-next-line: object-literal-key-quotes
      'nome': this.nome, 'nickname': this.nickname, 'email': this.email,
      // tslint:disable-next-line: object-literal-key-quotes
      'pais': this.pais, 'estado': this.estado, 'sexo': this.sex,
      // tslint:disable-next-line: object-literal-key-quotes
      'idade': this.idade, 'senha': this.senha, 'cidade': this.cidade, 'icone': '2'
    }).subscribe(
      (retorno: any) => {
        console.log('deu certo');
      }, (error: any) => {
        this.nav.navigateForward('/login');
      });
  }

  async openModalAviso() {
    if (this.senha === this.senha2) {
      // tslint:disable-next-line: max-line-length
      this.baseService.aviso = 'Um e-mail de confirmação foi enviado, confira sua caixa de entrada e ative seu cadastro. Caso não receber em até 30 min. entre em contato com projetomycup@gmail.com';
      this.cadastrar();
    } else {
      this.baseService.aviso = 'As senhas não coincidem. Tente novamente.';
    }
    const modal = await this.modalavisoController.create({
      component: ModalAvisoPage,
      cssClass: 'modal',
      componentProps: {
      }
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }

  ionViewWillEnter() {
    this.baseService.showBackButton = true;
  }

  ionViewWillLeave() {
    this.baseService.showBackButton = false;
    this.baseService.loading = true;
  }
}


