import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController } from '@ionic/angular';
import { ModalApostaPage } from '../modal-aposta/modal-aposta.page';

@Component({
  selector: 'app-data-jogos',
  templateUrl: './data-jogos.page.html',
  styleUrls: ['./data-jogos.page.scss'],
})
export class DataJogosPage implements OnInit {

  jogo: string;
  dataSelecionada: string;

  constructor(public baseService: BaseService,
    // tslint:disable-next-line: align
    private modalapostaController: ModalController) {

  }

  ngOnInit() {
  }


  clicou() {
    if (this.dataSelecionada) {
      console.log(this.dataSelecionada);
    } else {
      console.log('ta vazio');
    }
  }

  async openModalAposta(jogo: string) {
    this.jogo = jogo;
    console.log(this.jogo);
    const modal = await this.modalapostaController.create({
      component: ModalApostaPage,
      componentProps: {
      }
    });
    return await modal.present();
  }


  ionViewDidEnter() {
    this.baseService.loading = false;
  }

}
