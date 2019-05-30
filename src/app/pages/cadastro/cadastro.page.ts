import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Cadastro } from '../../shared/classe.cadastro';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private baseService: BaseService,
              private nav: NavController,
              private httpClient: HttpClient) { }

  nome: string;
  nickname: string;
  email: string;
  pais: string;
  estado: string;
  cidade: string;
  sexo: string;
  idade: string;


  cadastrar() {
    const cadastro = new Cadastro(this.nome, this.nickname, this.email, this.pais, this.estado, this.cidade, this.sexo, this.idade);
    const url = '/cadastro/';
    this.httpClient.post<any>(url, { cadastro }).subscribe(
      (retorno: any) => {
        console.log('deu certo');
      }, (error: any) => {
        console.log('deu errado');
      });
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }
}
