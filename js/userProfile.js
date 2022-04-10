import {Get} from './getApi.js'

function getUser(user){
    var data = Get(`https://api.github.com/users/${user}`)
    var userInfo = JSON.parse(data);

    return userInfo
}


const urlParams = new URLSearchParams(window.location.search)
var nomeParam = urlParams.get("minhaVariavel")
var user = getUser(nomeParam)

var userName = document.getElementById("user-name")
var userBio = document.getElementById("user-description")

userName.innerHTML = user.login
userBio.innerHTML = user.bio

document.getElementById("profile-avatar").src=`${user.avatar_url}`;


export var nomeParam