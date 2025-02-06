//EU quero que quando preencher o formulario, crie um card

//let selecionar = document.querySelectorAll(input)
    //let mensagemDeErro = "O campo é obrigatorio"

        //document.getElementById("mensagem").style.color = "red"
        //document.getElementById("mensagem")

    //let formulario = )// document.querySelectorAll("input")
    //let formulario2 = 
        //let conferirMensagem = formulario2 && formularioAinda
let c = []
function criarCard(){

    let conferirMensagem = document.getElementById("name1").value;
    let conferirMensagem2 = document.getElementById("Valor1").value;
    let umaMensagem = document.getElementById("mensagem");
    let corEscolhida = document.getElementById("cor1").value;

    //let tentativa = conferirMensagem.value

    if (conferirMensagem === "" || conferirMensagem2 === "" && conferirMensagem2=== Aa,Bb,Cc,Dd,Ee,Ff,Gg,Hh,Ii,Jj,Kk,Ll,Mm,Nn,Oo,Pp,Qq,Rr,Ss,Tt,Uu,Vv,Ww,Xx,Yy,Zz) {
        
        let mensagemDeErro = "Os campos são obrigatorios"
        umaMensagem.textContent = mensagemDeErro
        umaMensagem.style.color = "red"

    } else {
       let mensagemTeste = "Concluido"
        umaMensagem.textContent = mensagemTeste 
        umaMensagem.style.color = "green"

        c.push({ nome: conferirMensagem, valor: conferirMensagem2, cor: corEscolhida })

        // Limpando os campos
        document.getElementById("name1").value = ""
        document.getElementById("Valor1").value = ""
        document.getElementById("cor1").value = "#ffffff" // Resetando a cor para branco

        listaCard()
      
    }

    formulario.value = ""
    //let criarCard = document.createElementsById("cards1")
}

function listaCard(){
    let crieiCard = document.getElementById("cards1")
    crieiCard.innerHTML = ""

    for(let u= 0; u< c.length; u++){
        let elementosDoCard = document.createElement("div")
        elementosDoCard.className = "cards" // Estilizando a div do card

        // IMAGEM
        let imgCriar = document.createElement("img")
        imgCriar.className = "cards" // Estilizando a imagem
        imgCriar.src = "" // Aqui você pode adicionar a URL da imagem se tiver

        // NOME
        let nomeCriar = document.createElement("h3")
        nomeCriar.className = "card-title"
        nomeCriar.textContent = c[u].nome // Adiciona o nome do card

        // VALOR
        let valorCriar = document.createElement("p")
        valorCriar.className = "card-value"
        valorCriar.textContent = `Valor: R$ ${c[u].valor}` // Adiciona o valor

        //COR DE FUNDO
        elementosDoCard.style.backgroundColor = c[u].cor 

        //Botão de remover
        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover"
        botaoRemover.className = "botao-remover"
        botaoRemover.onclick = () => remover(u)

        // Adicionando elementos ao card
        elementosDoCard.appendChild(imgCriar)
        elementosDoCard.appendChild(nomeCriar)
        elementosDoCard.appendChild(valorCriar)
        elementosDoCard.appendChild(botaoRemover)

        // Adiciona o card à lista de cards
        crieiCard.appendChild(elementosDoCard)
    }

}

function remover(u){
    c.splice(u, 1)
    listaCard()
}


  //
       