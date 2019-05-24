import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    showBackButton = false;
    loading = true;
    header = false;
    dataAtual = new Date().toISOString();
    caminhoImagemPadrao = '../assets/img/';
}
