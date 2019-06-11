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
    sel11img = '../assets/img/band150x150sigla/' + this.jogos[0].sel1 + '.png';
    sel12img = '../assets/img/band150x150sigla/' + this.jogos[0].sel2 + '.png';
    sel21img = '../assets/img/band150x150sigla/' + this.jogos[1].sel1 + '.png';
    sel22img = '../assets/img/band150x150sigla/' + this.jogos[1].sel2 + '.png';
}
