var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

// rota para criar um novo diário
router.post("/criar", function (req, res) {
 diarioController.criarDiario(req, res); 
});

// rota para obter os editar o diário
router.put("/editar/:idDiario", function (req, res) {
diarioController.atualizarDiario (req, res);
});

// rota para excluir o diário
router.delete("/deletar/:idDiario", function (req, res) {
   diarioController.deletar(req, res);
});

router.get("/buscarDiarios/:fkUsuario", function (req, res) {
   diarioController.buscarDiarios(req, res);
});

router.get("/listarQtdeDiario/:idUsuario", function (req, res) {
   diarioController.listarQtdeDiario(req, res);
})

router.get("/buscarMes/:idUsuario", function (req, res) {
   diarioController.buscarMes(req, res);
})


module.exports = router;