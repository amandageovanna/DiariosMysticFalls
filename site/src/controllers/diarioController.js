var diarioModel = require("../models/diarioModel");

function criarDiario(req, res) {
    var titulo = req.body.titulo;
    var conteudo = req.body.conteudo;
    var fkUsuario = req.body.fkUsuario;
    // para garantir que cada diário seja atribuido para o usuario correto no bd

    if (titulo == undefined || titulo == "" ) {
        res.status(400).send("Titulo vazio!");
    } else if (conteudo == undefined || conteudo == "") {
        res.status(400).send("Conteudo vazio!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario vazio!");    
    } else {

        diarioModel.criarDiario(titulo, conteudo, fkUsuario)
            .then(function () {
                res.status(201).json({ mensagem: "Diário criado com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });

    }
    }

    function obterUltimosDiarios(req, res) {
        diarioModel.obterUltimosDiarios()
            .then(function (ultimosDiarios) {
                res.status(200).json(ultimosDiarios);
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });
    }


    function atualizarDiario(req, res) {
        var idDiario = req.params.idDiario;
        var novoTitulo = req.body.titulo;
        var novoConteudo = req.body.conteudo;

        diarioModel.atualizarDiario(idDiario, novoTitulo, novoConteudo)
            .then(function () {
                res.status(200).json({ mensagem: "Diário atualizado com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({ erro });
            });
    }

    function deletar(req, res) {
        var idDiario = req.params.idDiario;

        diarioModel.deletar(idDiario)
            .then(
                function () {
                res.status(200).json({mensagem: "Diário deletado com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });
    }

    function buscarDiarios(req, res) {
        var fkUsuario =  req.params.fkUsuario;

        diarioModel.buscarDiariosPorUsuario(fkUsuario)
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

    module.exports = {
        criarDiario,
        obterUltimosDiarios,
        atualizarDiario,
        deletar,
        buscarDiarios
    }