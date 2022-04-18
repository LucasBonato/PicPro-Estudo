

//Selecionando a UL
const listaOpcoes = document.querySelector(".sec_conta_details_optionstran")

//Adicionando Escutador de eventos
listaOpcoes.addEventListener("click", identificarOpcoes)

//Executando acao depois do clique
function identificarOpcoes(event){
    //console.log(event.target.tagName)

    //identificando onde ocorreu o clique
    const elemento = event.target

    //verificando se é um li
    if(elemento.tagName == "LI"){

        //recuperando o id
        const id = elemento.id

        //Selecionando uma secao utilizando o id (escolha do user)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        removeClasseMostrar()

        secaoEscolha.classList.add("mostrar")
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".sec_tran .container div")

    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}