
// função para mudar as informações com base no personagem clicado
function mudarInformacoes(personagemId) {
    // pega as referências dos elementos caixaDireita2 e caixaEsquerda2
    var caixaDireita2 = document.querySelector('.caixaDireita2');
    var caixaEsquerda2 = document.querySelector('.caixaEsquerda2');

    // vetores com informações dos personagens
    var titulos = ["STEFAN SALVATORE", "ELENA GILBERT", "CAROLINE FORBES", "BONNIE BENNET", "MATT DONOVAN", "TYLER LOCKWOOD"];
    var citacoes = [
        // Stefan:
        "A vida não se resume a momentos finais e sim aos momentos que levaram a eles",
        // Elena: 
        "Eu achava que o pior sentimento era perder alguém que se ama, mas estava errada. O pior é quando você percebe que perdeu a si mesma.",
        // Caroline: 
        "Por que eu deveria deixar o fato de que meu namorado foi transformado em um híbrido estragar o meu dia?",
        // Bonnie:
        " Você não pode viver a sua vida para os outros. Você tem de fazer o que for certo para você, mesmo que isso machuque as pessoas que você ama.",
        // Matt:
        "Elena está namorando um vampiro. Você é uma bruxa. Minha irmã é um fantasma. E eu sou apenas um cara que tenta imaginar como sua vida virou de ponta cabeça.",
        // Tyler:
       "Eu sou o primeiro híbrido de sucesso dele, Caroline. Não acha que isso é um pouco legal?",
    ];
    var imgSrcs = ["Imagens/stefanSalvatore.jpg"];
    var infoBibliografica = [["Nascimento", "1 de Novembro, 1846"]];
    // achar a posição do personagem no vetor
    var posicao = titulos.indexOf(personagemId);

    // atualiza os elementos HTML com as informações do personagem
    if (posicao !== -1) {
        caixaDireita2.innerHTML = "<h6 class='TituloSessaoPersonagem'>" +
            titulos[posicao] + "</h6> <div class='caixaCitacao'> <p>" +
            citacoes[posicao] + "</p> </div>";

        caixaEsquerda2.innerHTML = "<img class='imgSessaoPersonagem' src='" +
            imgSrcs[posicao] +
            "'><div><p class='TituloSessaoPersEsq'>INFORMAÇÃO BIBLIOGRÁFICA</p></div><div class='coluna'>" +
            "<div class='linhas'><div class='info'><div class='esquerda'>" + infoBibliografica[posicao][0] + ":</div><div class='direita'>" + infoBibliografica[posicao][1] + "</div></div></div>" +
            "</div>";
    }
}


//  associar manipuladores de eventos a cada imagem em um loop.
var imagens = document.querySelectorAll('.tamanhoPers');

for (var i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function (event) {
        var personagemId = event.target.id; // chama o ID da imagem clicada
        mudarInformacoes(personagemId);
    });
}


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

// // API do Vimeo 

document.addEventListener('DOMContentLoaded', function () {
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
