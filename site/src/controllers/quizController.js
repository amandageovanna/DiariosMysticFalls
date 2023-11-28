var quizModel = require("../models/quizModel");

function consultar(req, res) {
    var fkUsuario = req.params.idUsuario;  
       
        quizModel.consultar(fkUsuario) 
            .then(function (resultadoBusca) {
                    if (resultadoBusca.length > 0) {
                            res.status(200).json(resultadoBusca);
                        } else {
                            console.log("Nenhum resultado encontrado!");
                            res.status(204).send("Nenhum resultado encontrado!");
                        }
                    }).catch(function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao buscar usuário.", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });
                
                }

                function publicar(req, res) {               
                    var acertos = req.body.acertos;
                    var pontuacao = req.body.pontuacao;
                    var idUsuario = req.params.idUsuario;
                
                    if (acertos == undefined) {
                        res.status(400).send("Os acertos estão indefinidos!");
                    } else if (pontuacao == undefined) {
                        res.status(400).send("A pontuação está indefinida!");
                    } else if (idUsuario == undefined) {
                        res.status(403).send("O id do usuário está indefinido!");
                    } else {
                        quizModel.publicar(idUsuario, pontuacao, acertos)
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
                }
                
                function editar(req, res) {
                    var acertos = req.body.acertos;
                    var pontuacao = req.body.pontuacao;
                    var idUsuario = req.params.idUsuario;
                
                    quizModel.editar(pontuacao, acertos, idUsuario)
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
                
                module.exports = {
                    publicar,
                    editar,
                    consultar
                }