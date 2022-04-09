function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}



function main(){

    var url = window.location.href;

    var input = document.getElementById("user-input")
    input.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            window.location.href = '/profile.html'
        }
    })

    console.log(input.value)
    var user = input.value

    data = fazGet(`https://api.github.com/users/${user}`)
    repositorios = JSON.parse(data);
    
    var userName = document.getElementById('user-name')
    var userDescription = document.getElementById("user-description")

    userName.innerHTML = repositorios.login
    userDescription.innerHTML = repositorios.bio


}

main()

