import { getStarred } from "./starred.js";
import { Starred } from "./starred.js";
import { nomeParam } from "./getUser.js";
import { container } from "./scriptProfile.js";


var quantidadeEstrela = document.getElementById("star-quant")

//Recebe os repositorios da API
var starredList = getStarred(nomeParam)
//Cria o Array
var arrayStarred = []


//Armazena os dados da API dentro de um array
starredList.forEach(starred =>{
    var star = new Starred(starred.name,starred.description,starred.stargazers_count,starred.forks,starred.html_url)
    arrayStarred.push(star)
});

//função que cria os elementos e os preenche com as informações do array
export function MostrarStar(){

    arrayStarred.forEach(repo => {
        var lenght = arrayStarred.length;
        quantidadeEstrela.innerText = lenght

        var div = document.createElement('div')
        div.classList.add("repository-wrapper")
        var link = document.createElement('a')
        link.href = repo.link
        var h1 = document.createElement('h1')
        h1.innerHTML = repo.nome;
        h1.classList.add("repo-title")
        var p = document.createElement('p')
        p.innerHTML = repo.descricao
        var divWrapper = document.createElement('div')
        divWrapper.classList.add("stats-wrapper")

        var divLanguage = document.createElement('div')
        divLanguage.classList.add("language-container")

        var imgStar = document.createElement('img')
        imgStar.src = "assets/img/iconstar.svg"

        var quantidadeEstrelas = document.createElement('p')
        quantidadeEstrelas.innerHTML = repo.estrelas

        var branchContainer = document.createElement('div')
        branchContainer.classList.add("branch-container")

        var img = document.createElement('img')
        img.src="assets/img/branchicon.svg";

        var pBranch = document.createElement('p')
        pBranch.innerHTML = repo.forks;



        container.appendChild(div)
        div.appendChild(link)
        link.appendChild(h1)
        div.appendChild(p)
        div.appendChild(divWrapper)
        divWrapper.appendChild(divLanguage)
        divLanguage.appendChild(imgStar)
        divLanguage.appendChild(quantidadeEstrelas)
        divWrapper.appendChild(branchContainer)
        branchContainer.appendChild(img)
        branchContainer.appendChild(pBranch)
    })
}

export var starLength
export var arrayStarred
export var quantidadeEstrela