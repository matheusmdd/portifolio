//pega todos os itens da div "sub"
var sub = document.getElementsByClassName("sub");
//pega os elementos da div "subconteudo"
var subConteudo = document.getElementsByClassName("subConteudo");
//para abrir a aba clicada
function opentab(conhecimento){
    //laço de repetição para deixar a linha vermelha apenas na aba ativa
    for(subs of sub){
        subs.classList.remove("linkativo");
    }
    //para esconder o conteudo da aba "educação"
    for(subConteudos of subConteudo){
        subConteudos.classList.remove("ativar");
    }
    event.currentTarget.classList.add("linkativo"); //agora quando clica aparece a linha embaixo do nome
    document.getElementById(conhecimento).classList.add("ativar"); //quando clica em "educação aparece seu conteudo"

}