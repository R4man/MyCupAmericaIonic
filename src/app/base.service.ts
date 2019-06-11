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
    baseURL = 'web.farroupilha.ifrs.edu.br/paginas/~mycup/mobile/api/MyCup/mycup';
    usuario: Usuario = null;
    jogos: DataJogo[] = null;
    jogo2existe = false;
    qualjogo = null;
    login: string;
    senha: string;
}
