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
    ORDER BY idDiario DESC; `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function atualizarDiario(idDiario, novoTitulo, novoConteudo) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDiario()", idDiario, novoTitulo, novoConteudo);

    var instrucao = `
    UPDATE Diario
    SET Titulo = '${novoTitulo}', Conteudo = '${novoConteudo}'
    WHERE idDiario = ${idDiario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deletar(idDiario) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar(): ", idDiario);

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
    `

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

}

function listarQtdeDiario(idUsuario) {
    console.log("ACESSEI O DIARIO MODEL para buscar quantidade de diários por usuário, function listarQtdeDiario()", idUsuario);

    var instrucao = `
        SELECT COUNT(idDiario) AS qtdeDiario FROM Diario
        INNER JOIN Usuario ON fkUsuario = idUsuario
        WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMes(idUsuario) {
    console.log("ACESSEI O DIARIO MODEL para buscar quantidade de diários por mês, function buscarMes()", idUsuario);

    var instrucao = `
    SELECT COUNT(idDiario) AS qtdeDiario, MONTH(dtCriacao) AS mes 
    FROM diario 
    WHERE fkUsuario = ${idUsuario} 
    AND dtCriacao BETWEEN '2023-01-01 00:00:00' AND '2023-12-31 23:59:59' 
    GROUP BY mes`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarDiario,
    obterUltimosDiarios,
    atualizarDiario,
    deletar,
    buscarDiariosPorUsuario,
    listarQtdeDiario,
    buscarMes
}
