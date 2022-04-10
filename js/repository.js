import {Get} from './getApi.js'

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

export function getRepository(user){
    var  response = Get(`https://api.github.com/users/${user}/repos?per_page=100`)
    var  repository = JSON.parse(response)

    return repository
}

