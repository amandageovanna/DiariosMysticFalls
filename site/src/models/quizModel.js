var database = require("../database/config");

function publicar(fkUsuario, pontuacao, acertos) {
    console.log("PONTUACAO REGISTRADA COM SUCESSO! function publicar()", fkUsuario, pontuacao, acertos);

    var instrucao = `

    INSERT INTO pontuacaoQuiz (fkUsuario, Pontuacao, Acertos) VALUES 
    ('${fkUsuario}', '${pontuacao}', ${acertos} );
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultar(fkUsuario) {
    console.log("BUSCA FEITA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function consultar()", fkUsuario);

    var instrucao = `

   SELECT * FROM pontuacaoQuiz 
   WHERE fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaPontuacao, novaQtdAcertos, idUsuario) {
    console.log("PONTUACAO ATUALIZADA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar()");

    var instrucao = `

   UPDATE pontuacaoQuiz SET acertos = ${novaQtdAcertos}, Pontuacao = ${novaPontuacao}
   WHERE fkUsuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    publicar,
    consultar,
    editar
}


