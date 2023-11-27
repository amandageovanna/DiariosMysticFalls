var quizModel = require("../models/quizModel");

function pontuacao(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var score = req.body.pontuacao;

    // para garantir que o quiz seja atribuido para o usuario correto no bd

 
        quizModel.buscarPontuacao(fkUsuario) 
            .then(function (resultadoBusca) {
                    if (resultadoBusca.length > 0) {
                        console.log(resultadoBusca)
                        console.log('estou aqui!')

                        var total = Number(resultadoBusca[0].Pontuacao) + Number(score);
                        var totalTentativas = resultadoBusca[0].Tentativas+1;         
                                      
                        quizModel.atualizarPontuacao(fkUsuario, total, totalTentativas) 

                        .then (function () {
                            res.status(200);
                        })
                        .catch(function (erro) {
                            res.status(500).json({ erro });
                        });
                    } else {
                        quizModel.pontuacao(fkUsuario, score)
                        .then (function () {
                            res.status(200);
                        })
                        .catch(function (erro) {
                            res.status(500).json({ erro });
                        });
                    }

                res.status(201).json({ mensagem: "Pontuação com sucesso!" });
            })
            .catch(function (erro) {
                res.status(500).json({ erro: "Poxa vida hein, deu erro!"});
            });
        }

module.exports = {
    pontuacao
}