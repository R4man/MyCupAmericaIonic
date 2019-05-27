import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DataJogosPage } from './data-jogos.page';
import { ModalApostaPage } from '../modal-aposta/modal-aposta.page';

const routes: Routes = [
  {
    path: '',
    component: DataJogosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DataJogosPage, ModalApostaPage],
  entryComponents: [ModalApostaPage],
  exports: [DataJogosPage]
})
export class DataJogosPageModule { }
