var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrarResultadoQuiz", function (req, res) {
    quizController.registrarResultadoQuiz(req, res);
});

router.post("/atualizarXp", function (req, res) {
    quizController.atualizarXp(req, res);
});

module.exports = router;