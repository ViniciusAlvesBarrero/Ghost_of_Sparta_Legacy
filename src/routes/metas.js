var express = require("express");
var router = express.Router();

var registrarMeta = require("../controllers/registrarMetaController");

router.post("/registrarMeta/", function (req, res) {
    registrarMeta.registrarMeta(req, res);
});

module.exports = router;