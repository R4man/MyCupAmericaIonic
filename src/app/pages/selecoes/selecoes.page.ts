import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './selecoes.page.html',
  styleUrls: ['./selecoes.page.scss'],
})
export class SelecoesPage implements OnInit {

  constructor(public baseService: BaseService) { }

  ngOnInit() {
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