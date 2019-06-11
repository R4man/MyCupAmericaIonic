import { Injectable } from '@angular/core';
import { Usuario } from './shared/classe.usuario';
import { DataJogo } from './shared/classe.DataJogo';

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
    baseURL = 'http://127.0.0.1:8000/mycup';
    usuario: Usuario = null;
    jogoAtual1: DataJogo = null;
    jogoAtual2: DataJogo = null;
    jogo1existe = false;
    jogo2existe = false;
}
