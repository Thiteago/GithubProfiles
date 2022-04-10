import { getRepository } from './repository.js';
import { nomeParam } from './userProfile.js';
import {Repository} from './repository.js'
import { getStarred, Starred } from './starred.js';


//Cria o container para o display das divs a serem criadas
var container = document.getElementById("container-list")

//Remove todos os elementos da div container
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


var h1Repo = document.getElementById('repo-title')
var h1Star = document.getElementById('star-title')


var quantidadeRepo = document.getElementById("repo-quant")
var quantidadeEstrela = document.getElementById("star-quant")
//Recebe os repositorios da API
var repositoryList = getRepository(nomeParam);
//Cria o Array
var arrayRepo = []
//Armazena os dados da API dentro de um Array
repositoryList.forEach(repository => {
    var rep = new Repository(repository.name, repository.description, repository.language, repository.forks, repository.html_url)
    arrayRepo.push(rep)
});


var starredList = getStarred(nomeParam)
var arrayStarred = []
var starLength = arrayStarred.length;

starredList.forEach(starred =>{
    var star = new Starred(starred.name,starred.description,starred.stargazers_count,starred.forks,starred.html_url)
    arrayStarred.push(star)
});

function MostraRepositorios(){    
    //foreach para percorrer o array e imprimir os dados
    
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
        img.src="assets/img/branchicon.svg";

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

MostraRepositorios()



function MostrarStar(){
    arrayStarred.forEach(repo => {
        var lenght = arrayStarred.length;
        quantidadeEstrela.innerText = lenght

        var div = document.createElement('div')
        div.classList.add("repository-wrapper")
        var link = document.createElement('a')
        link.href = repo.link
        var h1 = document.createElement('h1')
        h1.innerHTML = repo.nome;
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



//Cria um filter para o input de pesquisa
var filter = document.getElementById("input-filter")


//Cria o evento de pesquisa
filter.addEventListener('keyup', (value) =>  {
    if(h1Repo.classList.contains('ativo')){
        var resultRepo =   arrayRepo.filter((repository) => {
            if(repository.nome.includes(filter.value)){
                return true
            }
        })
        displayRepository(resultRepo) 
    }else if(h1Star.classList.contains('ativo')){
        var resultRepo =   arrayStarred.filter((repository) => {
            if(repository.nome.includes(filter.value)){
                return true
            }
        })
        displayRepository(resultRepo) 
    }
    
})


//Mostra na tela o resultado da pesquisa
function displayRepository(resultado){

    removeAllChildNodes(container)
    var lenght = resultado.length;
    if(h1Repo.classList.contains('ativo')){
        quantidadeRepo.innerText = lenght
    }else if(h1Star.classList.contains('ativo')){
        quantidadeEstrela.innerText = lenght
    }
    
    
    

    resultado.forEach(repo =>{
        
        var div = document.createElement('div')
        div.classList.add("repository-wrapper")
        var link = document.createElement('a')
        link.href = repo.link
        var h1 = document.createElement('h1')
        h1.innerHTML = repo.nome;
        var p = document.createElement('p')
        p.innerHTML = repo.descricao
        var divWrapper = document.createElement('div')
        divWrapper.classList.add("stats-wrapper")

        var divLanguage = document.createElement('div')
        divLanguage.classList.add("language-container")


        if(h1Repo.classList.contains('ativo')){
            var span = document.createElement('span')
            span.innerHTML = "&lt; &gt;"
            divLanguage.appendChild(span)

            var pLanguage = document.createElement('p')
            pLanguage.innerHTML = repo.linguagemPrincipal
            divLanguage.appendChild(pLanguage)
        }else if(h1Star.classList.contains('ativo')){
            var imgStar = document.createElement('img')
            imgStar.src = 'assets/img/iconstar.svg'
            divLanguage.appendChild(imgStar)

            var quantidEstrela = document.createElement('p')
            quantidEstrela.innerHTML = repo.estrelas
            divLanguage.appendChild(quantidEstrela)
        }
        

        

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
        divWrapper.appendChild(branchContainer)
        branchContainer.appendChild(img)
        branchContainer.appendChild(pBranch)
    })
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
    displayRepository(arrayRepo)
})


