import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController } from '@ionic/angular';
import { ModalApostaPage } from '../modal-aposta/modal-aposta.page';
import { DataJogo } from 'src/app/shared/classe.DataJogo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-jogos',
  templateUrl: './data-jogos.page.html',
  styleUrls: ['./data-jogos.page.scss'],
})
export class DataJogosPage {

  jogo: string;
  dataJogos = new Array<string>('2019-06-14', '2019-06-15', '2019-06-16', '2019-06-17', '2019-06-18',
    '2019-06-19', '2019-06-20', '2019-06-21', '2019-06-22', '2019-06-23', '2019-06-24',
    '2019-06-27', '2019-06-28', '2019-06-29', '2019-07-02', '2019-07-03', '2019-07-06', '2019-07-07');
  dataSelecionada = this.dataJogos[0];
  indice = 0;

  constructor(public baseService: BaseService,
    // tslint:disable-next-line: align
    private modalapostaController: ModalController,
              private httpClient: HttpClient) {

  }
  sel11img = '../assets/img/band150x150sigla/' + this.baseService.jogos[this.baseService.qualjogo].sel1 + '.png';
  sel12img = '../assets/img/band150x150sigla/' + this.baseService.jogos[this.baseService.qualjogo].sel2 + '.png';
  sel21img = '../assets/img/band150x150sigla/' + this.baseService.jogos[this.baseService.qualjogo].sel1 + '.png';
  sel22img = '../assets/img/band150x150sigla/' + this.baseService.jogos[this.baseService.qualjogo].sel2 + '.png';

  requisicao_jogos(variavel: Date) {
    if (variavel === null) {
      const mes = variavel.getMonth;
      const dia = variavel.getDay;
      const dataCompleta = '2019-' + mes + '-' + dia;
      if (this.dataJogos.indexOf(dataCompleta) != null) {
        this.dataSelecionada = dataCompleta;
      } else {
        this.dataJogos[2].slice(0, 2);
      }
      console.log(dia);
    }
    const url = this.baseService.baseURL + '/consultarJogos/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, { 'dia': this.dataSelecionada, 'nickname': this.baseService.usuario.nickname }).subscribe(
      (retorno: any) => {
        this.baseService.jogo2existe = false;
        const todosJogos = retorno.pessoas;
        if (todosJogos.length > 1) {
          const jogo2 = todosJogos[1];
          const jogoAtual2 = new DataJogo(jogo2.pkJogo,
            jogo2.sel1,
            jogo2.sel2,
            jogo2.gol1,
            jogo2.gol2,
            jogo2.horario,
            jogo2.estadio,
            jogo2.local,
            jogo2.nickname,
            jogo2.valor_apostado,
            jogo2.aconteceu);
          this.baseService.jogos[1] = jogoAtual2;
          this.baseService.jogo2existe = true;
        }
        const jogo = todosJogos[0];
        const jogoAtual1 = new DataJogo(jogo.pkJogo,
          jogo.sel1,
          jogo.sel2,
          jogo.gol1,
          jogo.gol2,
          jogo.horario,
          jogo.estadio,
          jogo.local,
          jogo.nickname,
          jogo.valor_apostado,
          jogo.aconteceu);
        this.baseService.jogos[0] = jogoAtual1;
      }, (error: any) => {
        console.log('deu certo');
      });

  }

  mudar_data(avancar: boolean) {
    console.log(this.indice);
    if (avancar) {
      if (this.indice === this.dataJogos.length - 1) {
        return;
      }
      this.indice++;
    } else {
      if (this.indice === 0) {
        return;
      }
      this.indice--;
    }
    this.dataSelecionada = this.dataJogos[this.indice];
    this.requisicao_jogos(null);
  }

  async openModalAposta(jogo: number) {
    this.baseService.qualjogo = jogo;
    const modal = await this.modalapostaController.create({
      component: ModalApostaPage,
      componentProps: {
      }
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.baseService.showMenuButton = true;
  }

  ionViewWillLeave() {
    this.baseService.showMenuButton = false;
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
    const hora = new Date();
    this.requisicao_jogos(hora);
  }

}
