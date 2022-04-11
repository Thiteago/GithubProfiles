import { arrayRepo } from "./displayRepository.js"
import { arrayStarred } from "./displayStarred.js"
import { h1Repo } from "./scriptProfile.js"
import { h1Star } from "./scriptProfile.js"
import { removeAllChildNodes } from "./removeRepository.js"
import { container } from "./scriptProfile.js"
import { quantidadeRepo } from "./displayRepository.js"
import { quantidadeEstrela } from "./displayStarred.js"


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
        displayFilter(resultRepo) 
    }else if(h1Star.classList.contains('ativo')){
        var resultRepo =   arrayStarred.filter((repository) => {
            if(repository.nome.includes(filter.value)){
                return true
            }
        })
        displayFilter(resultRepo) 
    }
    
})





//Mostra na tela o resultado da pesquisa
export function displayFilter(resultado){

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
        h1.classList.add("repo-title")
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
