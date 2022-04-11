import { getRepository } from "./repository.js";
import { Repository } from "./repository.js";
import { nomeParam } from "./getUser.js";
import { container } from "./scriptProfile.js";
import { starLength } from "./displayStarred.js";


var quantidadeEstrela = document.getElementById("star-quant")
var quantidadeRepo = document.getElementById("repo-quant")

//Recebe os repositorios da API
var repositoryList = getRepository(nomeParam);
//Cria o Array
var arrayRepo = []
//Armazena os dados da API dentro de um Array
repositoryList.forEach(repository => {
    var rep = new Repository(repository.name, repository.description, repository.language, repository.forks, repository.html_url)
    arrayRepo.push(rep)
});



//função para criar os elementos e preencher com array
export function MostraRepositorios(){    

    arrayRepo.forEach(repo => {
        var lenght = arrayRepo.length;
        quantidadeRepo.innerText = lenght
        quantidadeEstrela.innerText = starLength

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

        var span = document.createElement('span')
        span.innerHTML = "&lt; &gt;"

        var pLanguage = document.createElement('p')
        pLanguage.innerHTML = repo.linguagemPrincipal

        var branchContainer = document.createElement('div')
        branchContainer.classList.add("branch-container")

        var img = document.createElement('img')
        img.src="../assets/img/branchicon.svg";

        var pBranch = document.createElement('p')
        pBranch.innerHTML = repo.forks;



        container.appendChild(div)
        div.appendChild(link)
        link.appendChild(h1)
        div.appendChild(p)
        div.appendChild(divWrapper)
        divWrapper.appendChild(divLanguage)
        divLanguage.appendChild(span)
        divLanguage.appendChild(pLanguage)
        divWrapper.appendChild(branchContainer)
        branchContainer.appendChild(img)
        branchContainer.appendChild(pBranch)
    })

} 

export var arrayRepo
export var quantidadeRepo