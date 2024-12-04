/* JavaScript (E qualquer Linguagem)
        - Variável
Um pedacinho de Memoria do Computador,
que eu posso guardar oque eu quiser

        -Funções
        
Pedacinho de codigo que so executa,
quando é chamado


Botão -> For Clicado -> Chama a minha função -> Liga o som

Document = buscar aquivo no HTML
query Selector( Slecionar ou pegar um item do html)
addEventListener - Sua vizia fofoqueira (ourindo alguem e te conta quando algo acontecer)

*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

// Ligar Som
botaoSom.addEventListener("click" , ligasom)

function ligasom(){
   video.muted = false
}

//Mostrar o Modal
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)


function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
    
}
