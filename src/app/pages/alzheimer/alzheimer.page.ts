import { Component} from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { ModalAvisoPage } from '../modal-aviso/modal-aviso.page';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alzheimer',
  templateUrl: './alzheimer.page.html',
  styleUrls: ['./alzheimer.page.scss'],
})
export class AlzheimerPage {

  constructor(public baseService: BaseService,
    // tslint:disable-next-line: align
    private modalavisoController: ModalController,
    // tslint:disable-next-line: align
    private httpClient: HttpClient,
    // tslint:disable-next-line: align
    private nav: NavController) { }

  email: string;

  enviar(): boolean {

    let i = true;
    const url = this.baseService.baseURL + '/reset/';
    // tslint:disable-next-line: object-literal-key-quotes
    this.httpClient.post<any>(url, { 'email': this.email }).subscribe(
      (retorno: any) => {
        i = true;
      }, (error: any) => {
        i = false;
      });
    return i;
  }

  async openModalAviso() {
    if (this.enviar()) {
      // tslint:disable-next-line: max-line-length
      this.baseService.aviso = 'Um e-mail de recuperação foi enviado. Caso não receba em até 30 min. entre em contato com projetomycup@gmail.com';
      this.nav.navigateForward('/login');
    } else {
      this.baseService.aviso = 'E-mail não encontrado';
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
    this.baseService.showBackButton = true;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.showBackButton = false;
    this.baseService.loading = true;
  }


}
