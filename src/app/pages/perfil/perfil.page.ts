import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nick:string;
  saldo:string;
  nome:string;
  constructor(public baseService: BaseService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nick = this.baseService.usuario.nickname; 
    this.saldo = this.baseService.usuario.saldo; 
    this.nome = this.baseService.usuario.nome;
    this.baseService.showBackButton = true;
    this.baseService.loading = false;
  }

  ionViewWillLeave() {
    this.baseService.showBackButton = false;
    this.baseService.loading = true;
  }
}
