var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

// rota para criar um novo diário
router.post("/criar", function (req, res) {
 diarioController.criarDiario(req, res); 
});

// rota para obter os ultimos 4 diários
router.get("/ultimos/", function (req, res) {  
diarioController.buscarDiariosPorUsuario (req, res); 
});

// rota para obter os editar o diário
router.put("/editar/:idDiario", function (req, res) {
   diarioController.atualizarDiario (req, res);
});

// rota para excluir o diário
router.delete("/deletar/:idDiario", function (req, res) {
   diarioController.deletar(req, res);
});

router.get("/buscardiarios/:fkUsuario", function (req, res) {
   diarioController.buscarDiarios(req, res);
});


module.exports = router;