import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

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
    private httpClient: HttpClient) { }

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


  cadastrar() {
    if (this.senha === this.senha2) {
// tslint:disable-next-line: max-line-length
      console.log(this.nome, this.nickname, this.email,
      this.pais, this.estado, this.sexo,
      this.idade, this.senha, this.cidade);
      const url = this.baseService.baseURL + '/cadastro/';
// tslint:disable-next-line: object-literal-key-quotes
      this.httpClient.post<any>(url, { 'nome': this.nome, 'nickname': this.nickname, 'email': this.email,
// tslint:disable-next-line: object-literal-key-quotes
                                       'pais': this.pais, 'estado': this.estado, 'sexo': this.sexo,
// tslint:disable-next-line: object-literal-key-quotes
                                       'idade': this.idade, 'senha': this.senha, 'cidade': this.cidade }).subscribe(
        (retorno: any) => {
          console.log('deu certo');
        }, (error: any) => {
          this.nav.navigateForward('/login');
        });
    } else {
      console.log('senha incopativeis');
     }
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }
}


