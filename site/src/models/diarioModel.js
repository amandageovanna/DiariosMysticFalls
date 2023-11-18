var database = require("../database/config");

function criarDiario(titulo, conteudo, fkUsuario) {
    console.log("DIARIO REGISTRADO COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function criarDiario()", titulo, conteudo, fkUsuario);
    var instrucao = `

    INSERT INTO Diario (Titulo, Conteudo, FkUsuario, dtCriacao) VALUES 
    ('${titulo}', '${conteudo}', ${fkUsuario}, NOW());
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterUltimosDiarios() {
    console.log("ACESSEI O OBTER ULTIMOS DIARIOS \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterUltimosDiarios()");

    var instrucao = `
    SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    ORDER BY idDiario DESC
    LIMIT 4; `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function atualizarDiario(idDiario, novoTitulo, novoConteudo) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDiario()", idDiario, novoTitulo, novoConteudo);

    var instrucao = `
    UPDATE Diario
    SET Titulo = '${novoTitulo}', Conteudo = '${novoConteudo}', dtQuantidade = NOW()
    WHERE idDiario = ${idDiario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deletarDiario(idDiario) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarDiario(): ", idDiario);

    var instrucao = `
        DELETE FROM Diario
        WHERE idDiario = ${idDiario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    return database.executar(instrucao);
}

function buscarDiariosPorUsuario(idUsuario) {
    console.log("ACESSEI O DIARIO MODEL para buscar diários por usuário, function buscarDiariosPorUsuario()", idUsuario);

    var instrucao = `
    SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    WHERE FkUsuario = ${idUsuario}
    ORDER BY dtCriacao DESC
    LIMIT 4
    `

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

}

module.exports = {
    criarDiario,
    obterUltimosDiarios,
    atualizarDiario,
    deletarDiario,
    buscarDiariosPorUsuario
}
