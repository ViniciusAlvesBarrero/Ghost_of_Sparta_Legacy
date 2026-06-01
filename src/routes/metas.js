var express = require("express");
var router = express.Router();

var registrarMeta = require("../controllers/registrarMetaController");

router.put("/registrarMeta/", function (req, res) {
    registrarMeta.registrarMeta(req, res);
});

module.exports = router;