//EU quero que quando preencher o formulario, crie um card

//let selecionar = document.querySelectorAll(input)

let umaMensagem = document.getElementById("mensagem")
let formulario = document.querySelectorAll("input") //document.getElementById("name1")
//let formularioAinda = document.getElementById("Valor1")
let conferirMensagem = umaMensagem+formulario.value


function criarCard(){

    if (conferirMensagem == "") {
        let mensagemDeErro = "O campo é obrigatorio"
        umaMensagem.textContent = mensagemDeErro
    } else {
        let mensagemTeste = "Concluido"
        umaMensagem.textContent = mensagemTeste 
    }
    //let criarCard = document.createElementsById("cards1")
}