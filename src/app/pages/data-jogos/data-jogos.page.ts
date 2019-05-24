import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-data-jogos',
  templateUrl: './data-jogos.page.html',
  styleUrls: ['./data-jogos.page.scss'],
})
export class DataJogosPage implements OnInit {

  constructor(private baseService: BaseService) {

   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }

}
