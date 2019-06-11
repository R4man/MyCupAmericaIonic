export class DataJogo {
    sel1: string;
    sel2: string;
    gol1: string;
    gol2: string;
    estadio: string;
    nickname: string;
    valorApostado: string;
    aconteceu: string;

    constructor(sele1: string, sele2: string, gol1: string, gol2: string,
                estadio: string, nickname: string, valor: string, aconteceu: string) {
             this.sel1 = sele1;
             this.sel2 = sele2;
             this.gol1 = gol1;
             this.gol2 = gol2;
             this.estadio = estadio;
             this.nickname = nickname;
             this.valorApostado = valor;
             this.aconteceu = aconteceu;
    }
}
