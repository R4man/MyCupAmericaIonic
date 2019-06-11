export class DataJogo {
    pkJogo: string;
    sel1: string;
    sel2: string;
    gol1: string;
    gol2: string;
    horario: string;
    estadio: string;
    local: string;
    nickname: string;
    valorApostado: number;
    aconteceu: string;



    constructor(pkJogo: string, sele1: string, sele2: string, gol1: string, gol2: string, horario: string,
                estadio: string, local: string, nickname: string, valor: number, aconteceu: string) {
        this.pkJogo = pkJogo;
        this.sel1 = sele1;
        this.sel2 = sele2;
        this.gol1 = gol1;
        this.gol2 = gol2;
        this.horario = horario;
        this.estadio = estadio;
        this.local = local;
        this.nickname = nickname;
        this.valorApostado = valor;
        this.aconteceu = aconteceu;
    }
}
