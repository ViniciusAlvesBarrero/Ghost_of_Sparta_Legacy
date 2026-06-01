var express = require("express");
var router = express.Router();

var atualizarSet = require("../controllers/atualizarSetController");

router.put("/atualizarArmadura/", function (req, res) {
    atualizarSet.atualizarArmadura(req, res);
});

router.put("/atualizarManopla/", function (req, res) {
    atualizarSet.atualizarManopla(req, res);
});

router.put("/atualizarArma/", function (req, res) {
    atualizarSet.atualizarArma(req, res);
});

module.exports = router;