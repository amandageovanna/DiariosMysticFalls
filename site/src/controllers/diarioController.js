var diarioModel = require("../models/diarioModel");

function criarDiario(req, res) {
    var titulo = req.body.titulo;
    var conteudo = req.body.conteudo;
    var fkDiario = req.body.fkDiario;
    // para garantir que cada diário seja atribuido para o usuario correto no bd

    if (titulo == undefined || titulo == "") {
        res.status(400).send("Titulo vazio!");
    } else if (conteudo == undefined || conteudo == "") {
        res.status(400).send("Conteudo vazio!");
    } else if (fkDiario == undefined) {
        res.status(400).send("fkDiario vazio!");
    } else {

        diarioModel.criarDiario(titulo, conteudo, fkDiario)
            .then(function () {
                res.status(201).json({mensagem: "Diário criado com sucesso!"});
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });

    }
}


function atualizarDiario(req, res) {
    var idPagina = req.params.idPagina;
    var novoTitulo = req.body.titulo;
    var novoConteudo = req.body.conteudo;

    diarioModel.atualizarDiario(idPagina, novoTitulo, novoConteudo)
        .then(function () {
            res.status(200).json({ mensagem: "Diário atualizado com sucesso!" });
        })
        .catch(function (erro) {
            res.status(500).json({ erro });
        });
}

function deletar(req, res) {
    var idPagina = req.params.idPagina;

    diarioModel.deletar(idPagina)
        .then(
            function () {
                res.status(200).json({ mensagem: "Diário deletado com sucesso!" });
            })
        .catch(function (erro) {
            res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
        });
}

function buscarDiarios(req, res) {
    var fkDiario = req.params.idDiario;

    diarioModel.buscarDiariosPorUsuario(fkDiario)
        .then((resultadoDiarios) => {
            if (resultadoDiarios.length > 0) {
                res.status(200).json({ diarios: resultadoDiarios });
            } else {
                res.status(200).json({ diarios: [] });
            }
        })
        .catch(function (erro) {
            res.status(500).json({ erro });
        });
}

function listarQtdeDiario(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar qtd diario do controller`);
    diarioModel.listarQtdeDiario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os a quantidade de diários: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarMes(req, res) {
    var idDiario = req.params.idDiario;

    diarioModel.buscarMes(idDiario)
        .then(
            function (resultado) {                
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os a quantidade de diários",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    criarDiario,  
    atualizarDiario,
    deletar,
    buscarDiarios,
    listarQtdeDiario,
    buscarMes    
}