var radio = document.querySelector('.manual-btn') // guardei aqui a navegação manual dentro da variavel
var cont = 1

document.getElementById('radio1').checked = true
// radio1 precisa estar marcado, quero que seja verdadeiro a possibilidade dele estar marcado, ou seja, o primeiro input deve estar marcado dinamicamente via Js

setInterval(() => {
    proximaImg()   //chamar a função responsável por passar a imagem para outra

}, 5000) //tempo que demora para passar as images// 

function proximaImg() {
    // criar um verificador que verá que imagem que está
    cont++

    // fazer verificação de quanto o CONT está valendo, de acordo com as imagens que tiver no slider. se tiver 4 imagens, assim que chegar na 4, voltar a ser 1

    if (cont > 3) {
        cont = 1
    }

 document.getElementById('radio'+cont).checked = true
 

}