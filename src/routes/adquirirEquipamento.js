var express = require("express");
var router = express.Router();

var adquirirEquipamentoController = require("../controllers/adquirirEquipamentoController");

router.put("/adquirirEquipamento/", function (req, res) {
    adquirirEquipamentoController.adquirirEquipamento(req, res);
});

router.get("/buscarQtdXP/:idAvatar", function (req, res) {
    adquirirEquipamentoController.buscarQtdXP(req, res);
});

router.get("/buscarArsenal/:idAvatar", function (req, res) {
    adquirirEquipamentoController.buscarArsenal(req, res);
});

router.get("/buscarRequisito/:idAvatar", function (req, res) {
    adquirirEquipamentoController.buscarRequisito(req, res);
});

module.exports = router;