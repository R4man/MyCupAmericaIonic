import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalController } from '@ionic/angular';
import { ModalMatriculaPage } from '../modal-matricula/modal-matricula.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private baseService: BaseService,
              private modalmatriculaController: ModalController) {

  }

  clicou() {
    console.log(this.baseService.dataAtual);
  }

  async openModalMatricula() {
    const modal = await this.modalmatriculaController.create({
      component: ModalMatriculaPage,
      componentProps: {
      }
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    this.baseService.header = true;
    this.baseService.loading = false;
  }

}
