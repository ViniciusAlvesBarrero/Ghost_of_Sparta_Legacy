var express = require("express");
var router = express.Router();

var ObterDadosGraficos = require("../controllers/ObterDadosGraficosController");

router.get("/buscarDadosXp/:idUsuario", function (req, res) {
    ObterDadosGraficos.buscarDadosXp(req, res);
});

router.get("/buscarDadosQuiz/:idUsuario", function (req, res) {
    ObterDadosGraficos.buscarDadosQuiz(req, res);
});

router.get("/buscarDadosAtributos/:idUsuario", function (req, res) {
    ObterDadosGraficos.buscarDadosAtributos(req, res);
});

router.get("/buscarDadosMeta/:idUsuario", function (req, res) {
    ObterDadosGraficos.buscarMeta(req, res);
});

module.exports = router;