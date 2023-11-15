var diarioModel = require("../models/diarioModel");

function criarDiario(req, res) {
    var titulo = req.body.titulo;
    var conteudo = req.body.conteudo;

    diarioModel.criarDiario(titulo, conteudo)
        .then(function () {
            res.status(201).json({ mensagem: "Diário criado com sucesso!" });
        })
        .catch(function (erro) {
            res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
        });

}

function obterUltimosDiarios(req, res) {
    diarioModel.obterUltimosDiarios()
        .then(function (ultimosDiarios) {
            res.status(200).json(ultimosDiarios);
        })
        .catch(function (erro) {
            res.status(500).json({erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
        });
}


function atualizarDiario (req, res) {
    var idDiario = req.params.id;
    var novoTitulo = req.body.titulo;
    var novoConteudo = req.body.conteudo;

    diarioModel.(novaDescricao, idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idAviso = req.params.idAviso;

    avisoModel.deletar(idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    criarDiario,
    obterUltimosDiarios,
    atualizarDiario,
    deletarDiario
}