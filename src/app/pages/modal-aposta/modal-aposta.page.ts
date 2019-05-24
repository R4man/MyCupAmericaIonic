import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-aposta',
  templateUrl: './modal-aposta.page.html',
  styleUrls: ['./modal-aposta.page.scss'],
})
export class ModalApostaPage implements OnInit {

  constructor(private ModalApostaController: ModalController) { }

  ngOnInit() {
  }

  apostar() {
    this.ModalApostaController.dismiss();
  }

  cancelar() {
    this.ModalApostaController.dismiss();
  }

}
