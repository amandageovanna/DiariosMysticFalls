var database = require("../database/config");

function criarDiario(titulo, conteudo, fkDiario) {
    console.log("PÁGINA REGISTRADA COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function criarDiario()", titulo, conteudo, fkDiario);
    var instrucao = `

    INSERT INTO Paginas (Titulo, Conteudo, fkDiario, dtCriacao) VALUES 
    ('${titulo}', '${conteudo}', ${fkDiario}, NOW());
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarDiario(idPagina, novoTitulo, novoConteudo) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDiario()", idPagina, novoTitulo, novoConteudo);

    var instrucao = `
    UPDATE Paginas
    SET Titulo = '${novoTitulo}', Conteudo = '${novoConteudo}'
    WHERE idPagina = ${idPagina};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deletar(idPagina) {
    console.log("ACESSEI O DIARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar(): ", idPagina);

    var instrucao = `
        DELETE FROM Paginas
        WHERE idPagina = ${idPagina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function buscarDiariosPorUsuario(idPagina) {
    console.log("ACESSEI O DIARIO MODEL para buscar páginas por usuário, function buscarDiariosPorUsuario()", idPagina);

    var instrucao = `
    SELECT idPagina, Titulo, Conteudo, dtCriacao
    FROM Paginas
    ORDER BY dtCriacao DESC
    `

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

}

function listarQtdeDiario(idUsuario) {
    console.log("ACESSEI O DIARIO MODEL para buscar quantidade de páginas por usuário, function listarQtdeDiario()", idUsuario);

    var instrucao = `       
    SELECT COUNT(Paginas.idPagina) AS qtdeDiario FROM Paginas
        INNER JOIN Diario ON Paginas.FkDiario = Diario.idDiario
        WHERE Diario.fkUsuario = ${idUsuario} AND MONTH(Paginas.dtCriacao) = 11;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMes(idDiario) {
    console.log("ACESSEI O DIARIO MODEL para buscar quantidade de páginas por mês, function buscarMes()", idDiario);

    var instrucao = `
    SELECT COUNT(idPagina) AS qtdeDiario, MONTH(dtCriacao) AS mes 
    FROM Paginas 
    WHERE fkDiario = ${idDiario} 
    AND dtCriacao BETWEEN '2023-01-01 00:00:00' AND '2023-12-31 23:59:59' 
    GROUP BY mes`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarDiario,
    atualizarDiario,
    deletar,
    buscarDiariosPorUsuario,
    listarQtdeDiario,
    buscarMes
}
