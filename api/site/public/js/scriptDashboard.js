function telaQuiz() {
    window.location.href = "../Quiz/index.html"
}

function telaSair() {
    window.location.href = "../PaginaInicial/index.html"
}

function telaDiario() {
    window.location.href = "../PaginaDiario/index.html"
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Quantidade de Diários por Mês',
            data: [15, 18, 27, 16, 19, 22, 29, 23, 21, 17, 16, 28],
            backgroundColor: '#584634',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
