import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    loading = true;
    home = true;
    header = true;
    showUserButton = false;
    showMenuButton = false;
    showBackButton = false;
    aviso = 'null';
    caminhoImagemPadrao = '../assets/img/';
    jogo2 = true;
    baseURL = 'web.farroupilha.ifrs.edu.br/paginas/~mycup/mobile/api/MyCup/mycup';
}
