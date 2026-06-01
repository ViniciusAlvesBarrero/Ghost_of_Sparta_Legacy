var express = require("express");
var router = express.Router();

var ObterDados = require("../controllers/ObterDadosController");

router.get("/buscarDadosXp/:idUsuario", function (req, res) {
    ObterDados.buscarDadosXp(req, res);
});

router.get("/buscarDadosQuiz/:idUsuario", function (req, res) {
    ObterDados.buscarDadosQuiz(req, res);
});

router.get("/buscarDadosAtributos/:idUsuario", function (req, res) {
    ObterDados.buscarDadosAtributos(req, res);
});

router.get("/buscarDadosMeta/:idUsuario", function (req, res) {
    ObterDados.buscarMeta(req, res);
});

router.get("/buscarDadosXpDiario/:idUsuario", function (req, res) {
    ObterDados.buscarXpDiario(req, res);
});

router.get("/BuscarDadosProgressoArvore/:idUsuario", function (req, res) {
    ObterDados.BuscarDadosProgressoArvore(req, res);
});

router.get("/BuscarDadosSetAtual/:idAvatar", function (req, res) {
    ObterDados.BuscarDadosSetAtual(req, res);
});

router.get("/BuscarDadosArsenal/:idAvatar", function (req, res) {
    ObterDados.BuscarDadosArsenal(req, res);
});

module.exports = router;