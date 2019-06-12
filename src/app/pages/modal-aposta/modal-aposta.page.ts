import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseService } from 'src/app/base.service';
import { DataJogo } from 'src/app/shared/classe.DataJogo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-aposta',
  templateUrl: './modal-aposta.page.html',
  styleUrls: ['./modal-aposta.page.scss'],
})
export class ModalApostaPage implements OnInit {

  valorAposta: string;
  valorSaldo: string;
  gols1: number;
  gols2: number;
  constructor(private ModalApostaController: ModalController, public baseService: BaseService, private httpClient: HttpClient) { }


  sel11img = '../assets/img/band150x150sigla/bra.png';
  sel12img = '../assets/img/band150x150sigla/bra.png';
  sel21img = '../assets/img/band150x150sigla/bra.png';
  sel22img = '../assets/img/band150x150sigla/bra.png';

  ngOnInit() {
    const url = this.baseService.baseURL + '/apostar/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, { 'idjogo': this.baseService.jogos[this.baseService.qualjogo - 1].pkJogo,
// tslint:disable-next-line: object-literal-key-quotes
      'nickname': this.baseService.usuario.nickname, 'valoraposta': this.valorAposta,
// tslint:disable-next-line: object-literal-key-quotes
      'golselecao1': this.gols1, 'golselecao2': this.gols2 }).subscribe(
      (retorno: any) => {
      }, (error: any) => {
      });
    // pk DataJogo
    // pk jogador
    // valor this.apostar
    // gols1 e 2;
  }

  apostar() {
    console.log(this.valorAposta);
    this.ModalApostaController.dismiss();
  }

  cancelar() {
    this.ModalApostaController.dismiss();
  }

}
