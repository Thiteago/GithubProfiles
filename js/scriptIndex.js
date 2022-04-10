var inputSearch = document.getElementById("user-input");



var passaValor = function(valor){
    window.location = "profile.html?minhaVariavel="+valor;
}




function indexRedirect(){

    inputSearch.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            var inputValue = inputSearch.value
            passaValor(inputValue)
        }
    })

}



indexRedirect()





