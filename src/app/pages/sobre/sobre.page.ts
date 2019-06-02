import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

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

