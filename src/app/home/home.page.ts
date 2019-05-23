import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private baseService: BaseService) {
  }


  ionViewDidEnter() {
    this.baseService.loading = false;
  }

}
