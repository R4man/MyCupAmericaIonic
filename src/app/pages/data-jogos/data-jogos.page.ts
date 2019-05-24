import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-data-jogos',
  templateUrl: './data-jogos.page.html',
  styleUrls: ['./data-jogos.page.scss'],
})
export class DataJogosPage implements OnInit {

  jogos: 5;
  dataSelecionada: string;

  constructor(private baseService: BaseService) {

  }




  ngOnInit() {
  }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }

  clicou() {
    if (this.dataSelecionada) {
      console.log(this.dataSelecionada);
    } else {
      console.log('ta vazio');
    }
  }

}
