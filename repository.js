export class Repository{
    nome;
    descricao;
    linguagemPrincipal;
    forks;

    constructor (nome, descricao , linguagem, forks){
        this.nome = nome;
        this.descricao = descricao;
        this.linguagemPrincipal = linguagem;
        this.forks = forks;
    }
} 