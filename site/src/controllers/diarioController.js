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

    function buscarDiariosPorUsuario(req, res) {
        var fkUsuario = req.params.idUsuario 

        diarioModel.buscarDiariosPorUsuario(fkUsuario)
            .then(function (ultimosDiarios) {
               console.log(ultimosDiarios)
                res.status(200).json(ultimosDiarios);
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });
    }


    function atualizarDiario(req, res) {
        var idDiario = req.params.id;
        var novoTitulo = req.body.titulo;
        var novoConteudo = req.body.conteudo;

        diarioModel.atualizarDiario(idDiario, novoTitulo, novoConteudo)
            .then(function () {
                res.status(200).json({ mensagem: "Diário atualizado com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });
    }

    function deletarDiario(req, res) {
        var idDiario = req.params.id;

        diarioModel.deletarDiario(idDiario)
            .then(function () {
                res.status(200).json({ mensagem: "Diário deletado com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa! Os servidores de Mystic Falls estão sobrecarregados de magia. Tente novamente mais tarde!" });
            });
    }

    module.exports = {
        criarDiario,
        buscarDiariosPorUsuario,
        atualizarDiario,
        deletarDiario
    }