import { Injectable } from '@angular/core';
import { Usuario } from './shared/classe.usuario';

@Injectable()
export class BaseService {
    loading = true;
    home = true;
    header = true;
    showUserButton = false;
    showMenuButton = false;
    showBackButton = false;
    apostou1 = false;
    apostou2 = false;
    aviso = 'null';
    caminhoImagemPadrao = '../assets/img/';
    jogo2 = true;
    baseURL = 'http://127.0.0.1:8000/mycup';
    usuario: Usuario = null;
}
