export class Usuario{
    nickname: string;
    nome: string;
    saldo: string;
    
    constructor(nickname: string, senha: string, nome: string, saldo: string){
        this.nickname = nickname;
        this.nome = nome;
        this.saldo = saldo;
    }
}