function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function getRepository(user){
    data = Get(`https://api.github.com/users/${user}`)
    repositorios = JSON.parse(data);

    return repositorios
}

const urlParams = new URLSearchParams(window.location.search)
const nomeParam = urlParams.get("minhaVariavel")

var rep = getRepository(nomeParam)

var userName = document.getElementById("user-name")
var userBio = document.getElementById("user-description")

userName.innerHTML = rep.login
userBio.innerHTML = rep.bio




