var database = require("../database/config");

function pontuacao(fkUsuario, score) {
    console.log("PONTUACAO REGISTRADA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao()", fkUsuario, score);

    var instrucao = `

    INSERT INTO quiz (fkUsuario, Pontuacao, Tentativas) VALUES 
    ('${fkUsuario}', '${score}', );
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPontuacao(fkUsuario) {
    console.log("BUSCA FEITA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPontuacao()", fkUsuario);

    var  instrucao = `

   SELECT Pontuacao, Tentativas FROM quiz 
   WHERE fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarPontuacao(fkUsuario, score, tentativas) {
    console.log("PONTUACAO ATUALIZADA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarPontuacao()", fkUsuario, score);

    var instrucao = `

   UPDATE quiz SET Pontuacao = ${score}, Tentativas = ${tentativas}
   WHERE fkUsuario = ${fkUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    pontuacao,
    buscarPontuacao,
    atualizarPontuacao
}