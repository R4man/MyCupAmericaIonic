import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-modal-aposta',
  templateUrl: './modal-aposta.page.html',
  styleUrls: ['./modal-aposta.page.scss'],
})
export class ModalApostaPage implements OnInit {


  maximo = 1000;
  valorAposta: string;
  valorSaldo: string;
  constructor(private ModalApostaController: ModalController, public baseService: BaseService) { }


  ngOnInit() {
  }

  apostar() {
    console.log(this.valorAposta);
    this.ModalApostaController.dismiss();
  }

  cancelar() {
    this.ModalApostaController.dismiss();
  }

}
