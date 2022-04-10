import { Get } from "./getApi.js";

export class Starred{
    nome;
    descricao;
    estrelas;
    forks;

    constructor (nome, descricao , estrelas, forks){
        this.nome = nome;
        this.descricao = descricao;
        this.estrelas = estrelas;
        this.forks = forks;
    }
} 

export function getStarred(user){
    var  response = Get(`https://api.github.com/users/${user}/starred?per_page=100`)
    var  starRepo = JSON.parse(response)

    return starRepo
}

