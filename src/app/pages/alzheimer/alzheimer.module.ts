import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlzheimerPage } from './alzheimer.page';
import { ModalAvisoPage } from '../modal-aviso/modal-aviso.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AlzheimerPage
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
  declarations: [AlzheimerPage],
  exports: [AlzheimerPage]
})
export class AlzheimerPageModule {}
