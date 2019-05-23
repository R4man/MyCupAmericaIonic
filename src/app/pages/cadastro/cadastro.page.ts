import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private baseService: BaseService) { }

  ionViewDidEnter() {
    this.baseService.loading = false;
  }
}
