export class Cadastro {

    nome: string;
    nickname: string;
    email: string;
    pais: string;
    estado: string;
    cidade: string;
    sexo: string;
    idade: string;
    senha: string;


    constructor(nome: string, nickname: string, email: string,
                pais: string, estado: string, cidade: string, sexo: string,
                idade: string, senha: string) {
        this.nome = nome;
        this.nickname = nickname;
        this.email = email;
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.sexo = sexo;
        this.idade = idade;
        this.senha = senha;
    }
}
