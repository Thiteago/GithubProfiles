function changeColor(){
    var botaoTexto = document.getElementById('changeColorMode').innerHTML
    var botao = document.getElementById('changeColorMode')
    var containerAside = document.querySelector(".container-profile")
    var containerTabs = document.querySelector(".container-tabs")
    var repositoryWrapper = document.querySelector(".repository-wrapper")

    if(botaoTexto == 'Escuro'){
        document.body.classList.add('containerMain-dark')
        document.body.classList.add('containerMain-dark')
        containerAside.classList.add('containerProfile-dark')
        containerTabs.classList.add('containerProfile-dark')
        repositoryWrapper.classList.add('containerProfile-dark')

        botao.innerHTML = 'Claro'
    }else if(botaoTexto == 'Claro'){
        document.body.classList.remove('containerMain-dark')
        containerAside.classList.remove('containerProfile-dark')
        containerAside.classList.remove('containerProfile-dark')
        containerTabs.classList.remove('containerProfile-dark')
        repositoryWrapper.classList.remove('containerProfile-dark')

        botao.innerHTML = 'Escuro'
    }
    
}

