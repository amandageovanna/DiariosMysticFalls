var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

// rota para criar um novo diário
router.post("/criar", function (req, res) {
 diarioController.criarDiario(req, res); 
});

// rota para obter os ultimos 4 diários
router.get("/ultimos/:idUsuario", function (req, res) { // o :idUsuario eh pq espera um parametro(espera que tenha um valor)  
diarioController.buscarDiariosPorUsuario (req, res); 
});

// rota para obter os editar o diário
router.put("/editar/:id", function (req, res) {
diarioController.atualizarDiario (req, res);
});

// rota para excluir o diário
router.delete("/excluir/:id", function (req, res) {
   diarioController.deletarDiario(req, res);
});


module.exports = router;