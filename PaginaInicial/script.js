function telaLogin() {
    window.location.href = "../Login/index.html"
}

// funções para chamar o gif //
function playGif(image) {
    image.src = 'Imagens/gifElenaVampira.gif'
}

function stopGif(image) {
    image.src = 'Imagens/vampEspecie.png'
}

function playGif1(image) {
    image.src = 'Imagens/gifLobisomem.gif'
}

function stopGif1(image) {
    image.src = 'Imagens/lobEspecie.png'
}

function playGif2(image) {
    image.src = 'Imagens/elijahGif.gif'
}

function stopGif2(image) {
    image.src = 'Imagens/elijahEspecie.png'
}

function playGif3(image) {
    image.src = 'Imagens/gifKlaus.gif'
}

function stopGif3(image) {
    image.src = 'Imagens/klausEspecie.png'
}

function playGif4(image) {
    image.src = 'Imagens/duplicatasGif.gif'
}

function stopGif4(image) {
    image.src = 'Imagens/doppelSessao.png'
}

function playGif5(image) {
    image.src = 'Imagens/gifBruxa.gif'
}
function stopGif5(image) {
    image.src = 'Imagens/bruxaEspecie.png'
}

// // API do Youtube 

// var player; // Variável global para armazenar a instância do player

// function onYouTubeIframeAPIReady() {  
//   player = new YT.Player('player', {
//     height: '530',
//     width: '900',
//     videoId: 'xyOOJII6a2Q', //Video ID vídeo
//     playerVars: {
//       'autoplay': 0, // 0 desativa a reprodução automática
//       'controls': 1, // 1 exibe os controles do player
//       'showinfo': 0, // 0 oculta informações do vídeo (título, etc.)
//       'rel': 0, // 0 desativa vídeos relacionados no final
//     },
//     events: {       
        
//     }
//   });
// }

document.addEventListener('DOMContentLoaded', function() {
    const VIMEO_URL = 'https://vimeo.com/883470644'; // Defina a URL do vídeo do Vimeo
    const VIDEO_ID = VIMEO_URL.split('/').pop(); // 

    // Configurações do player
    const options = {
        id: VIDEO_ID,
        width: 940,
        autoplay: false,
        portrait: 0, // Define para 0 para ocultar a foto do perfil
        title: 0,    // Define para 0 para ocultar o título do vídeo
    };

    
    const playerElement = document.getElementById('vimeoPlayer'); // Obter o elemento do player pelo ID

   // Verificar se o elemento foi encontrado                
    if (playerElement) {
        const player = new Vimeo.Player(playerElement, options);  

        player.on('play', () => {
            console.log('O vídeo foi reproduzido!');
        });
    } else {
        console.error('Elemento com o ID "vimeoPlayer" não encontrado.');
    }
});

