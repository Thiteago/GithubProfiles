function changeColor(){
    var botaoTexto = document.getElementById('changeColorMode').innerHTML
    var botao = document.getElementById('changeColorMode')
    var containerAside = document.querySelector(".container-profile")
    var containerTabs = document.querySelector(".container-tabs")
    var repositoryWrapper = document.querySelector(".repository-wrapper")
    var bubble = document.getElementById('bx')


    if(botaoTexto == 'Escuro'){
        containerAside.classList.add('containerProfile-dark')
        containerTabs.classList.add('containerProfile-dark')
        repositoryWrapper.classList.add('containerProfile-dark')
        bubble.classList.add('spreadbubble-change')
        bubble.classList.remove('spreadbubble')
        
        botao.innerHTML = 'Claro'
    }else if(botaoTexto == 'Claro'){
        containerAside.classList.remove('containerProfile-dark')
        containerAside.classList.remove('containerProfile-dark')
        containerTabs.classList.remove('containerProfile-dark')
        repositoryWrapper.classList.remove('containerProfile-dark')
        bubble.classList.remove('spreadbubble-change')
        bubble.classList.add('spreadbubble')


        botao.innerHTML = 'Escuro'
    }
}
