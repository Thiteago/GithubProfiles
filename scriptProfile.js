import {Repository} from './repository.js'

function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function getUser(user){
    console.log(user)
    var data = Get(`https://api.github.com/users/${user}`)
    var userInfo = JSON.parse(data);

    return userInfo
}

function getRepository(user){
    var  response = Get(`https://api.github.com/users/${user}/repos`)
    var  repository = JSON.parse(response)

    return repository
}

const urlParams = new URLSearchParams(window.location.search)
const nomeParam = urlParams.get("minhaVariavel")

var user = getUser(nomeParam)

var userName = document.getElementById("user-name")
var userBio = document.getElementById("user-description")

userName.innerHTML = user.login
userBio.innerHTML = user.bio

document.getElementById("profile-avatar").src=`${user.avatar_url}`;

var repositoryList = getRepository(nomeParam);

var arrayRepo = []

repositoryList.forEach(repository => {
    var rep = new Repository(repository.name, repository.description, repository.language, repository.forks)
    arrayRepo.push(rep)
});

var container = document.getElementById("container-list")


arrayRepo.forEach(repo => {
    var div = document.createElement('div')
    div.classList.add("repository-wrapper")
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
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(divWrapper)
    divWrapper.appendChild(divLanguage)
    divLanguage.appendChild(span)
    divLanguage.appendChild(pLanguage)
    divWrapper.appendChild(branchContainer)
    branchContainer.appendChild(img)
    branchContainer.appendChild(pBranch)


})


var filter = document.getElementById("input-filter")

filter.addEventListener('keyup', (value) =>  {
    var result =   arrayRepo.filter((repository) => {
        if(repository.nome.includes(filter.value)){
            return true
        }
    })
    displayRepository(result)
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function displayRepository(repositorios){
    removeAllChildNodes(container)
    repositorios.forEach(repo =>{
        
        var div = document.createElement('div')
        div.classList.add("repository-wrapper")
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
        div.appendChild(h1)
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
