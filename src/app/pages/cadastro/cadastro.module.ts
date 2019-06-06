import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import * as cadastroPage from './cadastro.page';
import { HttpClientModule } from '@angular/common/http';
import { ModalAvisoPage } from '../modal-aviso/modal-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: cadastroPage.CadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  declarations: [cadastroPage.CadastroPage],
  exports: [cadastroPage.CadastroPage]
})
export class CadastroPageModule {}
