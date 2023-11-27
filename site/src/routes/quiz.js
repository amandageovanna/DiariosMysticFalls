var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/pontuacao/", function (req, res) {
    quizController.pontuacao(req, res);
})

module.exports = router;