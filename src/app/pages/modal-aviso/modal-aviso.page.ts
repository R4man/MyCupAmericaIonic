import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-modal-aviso',
  templateUrl: './modal-aviso.page.html',
  styleUrls: ['./modal-aviso.page.scss'],
})
export class ModalAvisoPage implements OnInit {

  constructor(public baseService: BaseService) { }

  ngOnInit() {
  }

}
