import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    showBackButton = false;
    loading = true;
    home = true;
    header = true;
    aviso = 'null';
    caminhoImagemPadrao = '../assets/img/';
    jogo2 = true;
    baseURL = 'http://127.0.0.1:8000/mycup';
}
