var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

// rota para criar um novo diário
router.post("/criar", diarioController.criarDiario);

// rota para obter os ultimos 4 diários
router.get("/ultimos", diarioController.obterUltimosDiarios);

// rota para obter os editar o diário
router.put("/editar/:id", diarioController.atualizarDiario);

// rota para excluir o diário
router.delete("/excluir/:id", diarioController.deletarDiario);



module.exports = router;