
// função para mudar as informações com base no personagem clicado. personagemId é como dizer a função: "aqui está um personagem com o ID xx, agora faça o que precisa ser feito".
function mudarInformacoes(personagemId) {

    // pega as referências dos elementos caixaDireita2 e caixaEsquerda2. 
    var caixaDireita2 = document.querySelector('.caixaDireita2');
    var caixaEsquerda2 = document.querySelector('.caixaEsquerda2');

    // vetores com informações dos personagens
    var titulos = ["STEFAN SALVATORE", "ELENA GILBERT", "DAMON SALVATORE", "CAROLINE FORBES", "BONNIE BENNETT", "MATT DONOVAN", "TYLER LOCKWOOD"];
    var citacoes = [
        // Stefan:
        "<br> <br> A vida não se resume a momentos finais e sim aos momentos que levaram a eles",
        // Elena: 
        "<br> Eu achava que o pior sentimento era perder alguém que se ama, mas estava errada. O pior é quando você percebe que perdeu a si mesma.",
        // Damon: 
        "Não me entenda errado, Stefan. Eu não ligo de ser o cara mau. Eu vou tomar todas as decisões da vida e da morte, enquanto você está ocupado se preocupando com danos colaterais. Eu até mesmo vou deixar que ela me odeie. Mas no final do dia, eu vou ser aquele que vai mantê-la viva.",
        // Caroline: 
        "<br><br> Por que eu deveria deixar o fato de que meu namorado foi transformado em um híbrido estragar o meu dia?"  ,
        // Bonnie:
        " <br> Você não pode viver a sua vida para os outros. Você tem de fazer o que for certo para você, mesmo que isso machuque as pessoas que você ama.",
        // Matt:
        "<br> Elena está namorando um vampiro. Você é uma bruxa. Minha irmã é um fantasma. E eu sou apenas um cara que tenta imaginar como sua vida virou de ponta cabeça.",
        // Tyler:
        "<br><br> Eu sou o primeiro híbrido de sucesso dele, Caroline. Não acha que isso é um pouco legal?",
    ];

    var imgSrcs = [`assets/paginaInicial/stefanSalvatore.jpg`, `assets/paginaInicial/elenaGilbert.jpeg`, "assets/paginaInicial/damonSalvatore.png", "assets/paginaInicial/carolineForbes.png", `assets/paginaInicial/bonnieBennett.png`, "assets/paginaInicial/mattDonovan.png", "assets/paginaInicial/tylerLockwood.png"];

    var infoBibliografica = ["1 de Novembro, 1846", "22 de Junho, 1992", "18 de Junho, 1839", "10 de Outubro, 1992", "5 de Fevereiro, 1993", "26 de Fevereiro, 1993", "10 de Fevereiro, 1993"];

    var sobrePersonagem = [
        // Stefan:
        `Stefan Salvatore, um vampiro do século XIX em Mystic Falls, é inicialmente apresentado como um ser reservado e compassivo, contrastando com seu irmão mais velho, Damon. Sua chegada à cidade desencadeia eventos significativos, principalmente ao se envolver romanticamente com a protagonista Elena Gilbert. A luta de Stefan para manter sua humanidade diante de sua natureza vampírica é uma constante na narrativa, buscando equilibrar seus instintos sanguinários com uma vida ética e moral. <br> <br>
        
        A dinâmica complexa entre os irmãos Salvatore, especialmente a relação muitas vezes conflituosa com Damon, é um elemento central na trama. Stefan é frequentemente retratado como o "bom irmão", contrastando com a impulsividade e os desejos mais sombrios de Damon. <br> <br>
        
        Ao longo das temporadas, a história de Stefan evolui à medida que ele enfrenta desafios pessoais, confronta inimigos sobrenaturais e lida com as complexidades de ser um vampiro em Mystic Falls. Sua jornada é marcada por altos e baixos, testando sua força interior e sua capacidade de resistir à escuridão que vem com sua natureza vampírica. O relacionamento de Stefan com Elena e suas escolhas morais adicionam camadas intrigantes à sua narrativa, tornando-o uma figura central e cativante na trama. <br> <br>`,

        // Elena: 
        `Elena, uma das personagens centrais de "The Vampire Diaries", inicialmente uma estudante do ensino médio em Mystic Falls, vê sua vida tomar um rumo extraordinário com a chegada dos vampiros Stefan e Damon Salvatore. Caracterizada como compassiva e corajosa, sua jornada é marcada por tragédias e desafios sobrenaturais, mantendo uma forte determinação em proteger seus entes queridos e a cidade. <br> <br>

        Aos 17 anos, Elena perde os pais em um acidente de carro, passando a viver com sua tia Jenna e irmão Jeremy. Descobre ser uma cópia Petrova, assim como Katherine Pierce, antigo amor dos Salvatores, e se envolve em um triângulo amoroso, desenvolvendo sentimentos por Damon, enquanto enfrenta perigos como Klaus, um híbrido Original. <br> <br>
        
        Ao longo da série, Elena passa por transformações marcantes, incluindo eventos que a colocam em situações de vida ou morte. Lidando com a perda, o amor e as complexidades do mundo sobrenatural de Mystic Falls, seu papel como elo entre os Salvatores e o núcleo emocional da narrativa enriquece a história, enquanto equilibra sua humanidade com os desafios do universo vampírico.
        `,


        //Damon: 
        `Nascido no século XIX em Mystic Falls, Damon compartilhou uma ligação profunda com seu irmão
        mais novo, Stefan. No entanto, a chegada de Katherine Pierce, uma vampira sedutora,
        desencadeou um tumulto em suas vidas. Essa paixão compartilhada dividiu os irmãos e moldou o
        destino de Damon. <br> <br>

        Damon abraçou sua natureza vampírica, tornando-se um predador cruel, conhecido por seu
        charme e sedução. Ele era um anti-herói, cuja brutalidade rivalizava com sua
        vulnerabilidade. Sua busca por redenção e seu desejo de superar sua natureza sombria formam
        o cerne de sua jornada. <br> <br>

        O ponto de virada na vida de Damon ocorre com a chegada de Elena Gilbert, uma jovem que se
        assemelha a Katherine. Seu amor por Elena desperta uma humanidade adormecida dentro dele,
        forçando-o a enfrentar sua dualidade. Ele evolui de um vilão complexo para um aliado
        confiável na proteção de Mystic Falls e de seus entes queridos.`,

        // Caroline: 
        `Caroline é inicialmente apresentada como uma estudante popular do ensino médio em Mystic Falls. Seu caráter evolui de uma figura mais superficial para uma mulher forte e independente ao longo da série.
        Iniciando como amiga de Elena Gilbert, Caroline enfrenta uma série de desafios ao ser transformada em vampira. Sua jornada é marcada por autodescoberta e crescimento pessoal, passando de uma jovem insegura para uma líder confiante e leal. <br> <br>

        Caroline é conhecida por sua lealdade aos amigos e sua capacidade de superar adversidades. Ela estabelece relações significativas, incluindo um romance complexo com Klaus Mikaelson, um híbrido Original. Sua história destaca temas de amizade, amor e força interior. <br> <br>
        
        Ao longo da série, Caroline se torna uma figura fundamental na proteção de Mystic Falls e na luta contra ameaças sobrenaturais. Sua transformação, tanto física quanto emocional, contribui para a riqueza da trama, solidificando Caroline Forbes como uma personagem memorável e multifacetada.`,
        // Bonnie:
        `Bonnie é inicialmente introduzida como uma estudante talentosa e sensível em Mystic Falls. Descendente de uma linhagem de bruxas poderosas, Bonnie é dotada de habilidades sobrenaturais, tornando-se um elemento essencial na trama. Ao longo da série, Bonnie enfrenta desafios relacionados à sua herança mágica. Sua jornada é marcada por sacrifícios, confrontos com forças sobrenaturais e a descoberta de sua verdadeira importância no universo paranormal de Mystic Falls. <br> <br>
     
        A amizade próxima de Bonnie com Elena Gilbert e outros residentes da cidade destaca seu papel como protetora e aliada. Seu envolvimento com vampiros, lobisomens e outros seres sobrenaturais a coloca no centro de eventos cruciais. Bonnie também desenvolve um relacionamento complexo com Enzo St. John, explorando os limites entre o bem e o mal. Sua capacidade de usar a magia para proteger seus entes queridos e enfrentar desafios sobrenaturais destaca sua força e determinação. <br> <br>
     
        Ao longo das temporadas, Bonnie Bennett se destaca como uma personagem resiliente, cujo papel vai além do suporte mágico, contribuindo para a riqueza da narrativa com sua jornada de autodescoberta e seu papel vital na proteção de Mystic Falls.`,

        // Matt:
        `Matt é introduzido como um personagem humano em Mystic Falls, inicialmente sendo o namorado de Elena Gilbert. Através da série, Matt representa a perspectiva humana em um mundo sobrenatural, destacando-se por sua compaixão, lealdade e determinação. Ao longo das temporadas, Matt enfrenta inúmeros desafios, desde perdas trágicas até o envolvimento com eventos sobrenaturais que moldam a cidade. Sua relação com os seres sobrenaturais, incluindo vampiros e bruxas, destaca seu papel como um elo entre o mundo humano e o paranormal. <br> <br>        
        Matt também se envolve em relacionamentos complexos, incluindo ligações românticas com outros personagens da série. Sua capacidade de manter sua humanidade em um ambiente cheio de criaturas sobrenaturais destaca sua força moral. <br> <br>        
        A determinação de Matt em proteger seus amigos e a cidade é evidente em várias situações, mesmo quando confrontado com desafios sobre-humanos. Sua jornada é marcada pela evolução de um personagem inicialmente considerado comum para alguém fundamental na trama, trazendo equilíbrio e representando a humanidade em um mundo sobrenatural complexo.  `,


        // Tyler:
        `Tyler é introduzido como um estudante atlético e popular de Mystic Falls. Sua história é entrelaçada com a presença de seres sobrenaturais na cidade, particularmente com a maldição dos Lobisomens. Inicialmente, Tyler é retratado como um personagem impulsivo e muitas vezes conflituoso. Sua jornada toma um rumo crucial quando descobre que faz parte de uma linhagem de lobisomens, marcada por transformações mensais involuntárias. A maldição lobisomem torna-se um elemento central em sua vida, moldando seu caráter e desafios futuros. <br> <br>
        
        A relação de Tyler com outros personagens, como Caroline Forbes, destaca seu desenvolvimento emocional. Ao longo da série, ele enfrenta dilemas morais, especialmente quando se torna um Híbrido Original sob a influência de Klaus Mikaelson. <br> <br>
        
        A trajetória de Tyler é caracterizada por sacrifícios pessoais, lutas internas e uma busca constante por sua própria identidade. Seu papel como um representante dos lobisomens em Mystic Falls adiciona uma camada única à dinâmica sobrenatural da série, destacando a complexidade de sua jornada e sua contribuição para o universo fictício da trama.`,
    ]

    var informacaoAdicional = ["Transformado por:", "Transformado por:", "Transformado por:", "Transformado por:", "Causas da morte:", "Causas de morte:", "Transformado por:",]

    var transformado = [
        // Stefan
        "Katherine Pierce em 25 de Setembro, 1864",
        //Elena
        "Sangue de Damon em 6 de Novembro de 2011 (administrado por Meredith Fell)",
        //Damon
        "Katherine Pierce em 25 de Setembro de 1864",
        // Caroline
        "Damon Salvatore em 26 de Fevereiro, 2010 (transição iniciada por Katherine)",       
        // Bonnie
        "Uso excessivo de magia (1ª e 2ª vezes; ressuscitada)",
        // Matt
        `Afogado, pescoço quebrado, esfaqueado no pescoço, feitiço de parada cardíaca`,
        // Tyler
        `Ao matar Sarah (Lobisomem), por Klaus Mikaelson (híbrido), ao matar Liv (Lobisomem)`
    ]

    var especie = [`Vampiro`, `Vampira, Duplicata`, `Vampiro`, `Vampira`, `Bruxa, Âncora`, `Humano`, `Lobisomem, Híbrido`]

    var interpretado = [`Paul Wesley`, `Nina Dobrev`, `Ian Somerhalder`, `Candice Accola`, `Kat Graham`, `Zach Roerig`, `Michael Trevino`]

    // achar a posição do personagem no vetor
    var posicao = titulos.indexOf(personagemId);

    // atualiza os elementos HTML com as informações do personagem, se a variável 'posicao' não for igual a -1, vai executar o bloco
    if (posicao != -1) {
        caixaDireita2.innerHTML = `<h6 class="TituloSessaoPersonagem"> ${titulos[posicao]} </h6> 
        <div class="caixaCitacao">
         <p> 
            ${citacoes[posicao]} 
         </p> 
         </div>
           
         <p> 
            ${sobrePersonagem[posicao]}
         </p> `
        caixaEsquerda2.innerHTML = `
         <img class='imgSessaoPersonagem' src='${imgSrcs[posicao]}'>
           <div> 
              <p class="TituloSessaoPersEsq"> INFORMAÇÃO BIBLIOGRÁFICA </p> 
           </div> 
           
           <div class="coluna">
              <div class="linhas">
                 <div class="info">
                      <div class="esquerda"> Nascimento:</div>
                      <div class="direita"> ${infoBibliografica[posicao]}</div>
                      </div> 
                    </div>
            </div>

            <div class="divisor"></div>

            <div class="linhas"></div>
            <div class="info">
                <div class="esquerda">${informacaoAdicional[posicao]}</div>
                <div class="direita">${transformado[posicao]}</div>
            </div>
            <div class="divisor"></div>

            <div class="linhas"></div>
            <div class="info">
                <div class="esquerda">Espécie:</div>
                <div class="direita">${especie[posicao]}</div>
            </div>
            <div class="divisor"></div>

            <div class="linhas"></div>
            <div class="info">
                <div class="esquerda">Interpretado por:</div>
                <div class="direita">${interpretado[posicao]}</div>
            </div>            
            `
    }
}

function telaLogin() {
    window.location.href = "login.html"
   
}

function cadastrar() {
    window.location.href = "cadastro.html"
}

// funções para chamar o gif //
function playGif(image) {
    image.src = 'assets/paginaInicial/gifElenaVampira.gif'
}

function stopGif(image) {
    image.src = 'assets/paginaInicial/vampEspecie.png'
}

function playGif1(image) {
    image.src = 'assets/paginaInicial/gifLobisomem.gif'
}

function stopGif1(image) {
    image.src = 'assets/paginaInicial/lobEspecie.png'
}

function playGif2(image) {
    image.src = 'assets/paginaInicial/elijahGif.gif'
}

function stopGif2(image) {
    image.src = 'assets/paginaInicial/elijahEspecie.png'
}

function playGif3(image) {
    image.src = 'assets/paginaInicial/gifKlaus.gif'
}

function stopGif3(image) {
    image.src = 'assets/paginaInicial/klausEspecie.png'
}

function playGif4(image) {
    image.src = 'assets/paginaInicial/duplicatasGif.gif'
}

function stopGif4(image) {
    image.src = 'assets/paginaInicial/doppelSessao.png'
}

function playGif5(image) {
    image.src = 'assets/paginaInicial/gifBruxa.gif'
}
function stopGif5(image) {
    image.src = 'assets/paginaInicial/bruxaEspecie.png'
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
