import { MostraRepositorios } from "./displayRepository.js"
import { MostrarStar } from "./displayStarred.js"
import {removeAllChildNodes} from "./removeRepository.js"
import {displayFilter} from "./displayFilter.js"

//Cria o container para o display das divs a serem criadas
var container = document.getElementById("container-list")

//Pega os elementos do nav bar
var h1Repo = document.getElementById('repo-title')
var h1Star = document.getElementById('star-title')

document.getElementById("input-filter")

if(h1Repo.classList.contains('ativo')){
    MostraRepositorios()
}else if(h1Star.classList.contains('ativo')){
    MostrarStar();
}

h1Star.addEventListener('click', () =>{
    h1Star.classList.add('ativo')
    h1Repo.classList.remove('ativo')

    removeAllChildNodes(container)
    MostrarStar()
})

h1Repo.addEventListener('click', () =>{
    h1Star.classList.remove('ativo')
    h1Repo.classList.add('ativo')

    removeAllChildNodes(container)
    MostraRepositorios()
})

if(document.getElementById("input-filter") === document.activeElement){
    displayFilter()
}




export var container
export var h1Repo
export var h1Star






