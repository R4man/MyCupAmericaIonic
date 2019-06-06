import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import * as perfilPage from './perfil.page';
import { HttpClientModule } from '@angular/common/http';
import { ModalAvisoPage } from '../modal-aviso/modal-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: perfilPage.PerfilPage
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
  declarations: [perfilPage.PerfilPage],
  exports: [perfilPage.PerfilPage]
})
export class PerfilPageModule {}
