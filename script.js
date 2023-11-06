document.addEventListener('DOMContentLoaded', function () {
var radio = document.querySelector('.manual-btn')
var cont = 1
var vaiVolta = 0

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 5 ){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
});

function playGif(image) {
    image.src = 'imagens-serie/gifElenaVampira.gif'
}

function stopGif(image) {
    image.src = 'imagens-serie/vampEspecie.png'
}

function playGif1(image) {
    image.src = 'imagens-serie/gifLobisomem.gif'
}

function stopGif1(image) {
    image.src = 'imagens-serie/lobEspecie.png'
}

function playGif2(image) {
    image.src = 'imagens-serie/elijahGif.gif'
}

function stopGif2(image) {
    image.src = 'imagens-serie/elijahEspecie.png'
}

function playGif3(image) {
    image.src = 'imagens-serie/gifKlaus.gif'
}

function stopGif3(image) {
    image.src = 'imagens-serie/klausEspecie.png'
}

function playGif4(image) {
    image.src = 'imagens-serie/duplicatasGif.gif'
}

function stopGif4(image) {
    image.src = 'imagens-serie/doppelSessao.png'
}

function playGif5(image) {
    image.src = 'imagens-serie/gifBruxa.gif'
}
function stopGif5(image) {
    image.src = 'imagens-serie/bruxaEspecie.png'
}

