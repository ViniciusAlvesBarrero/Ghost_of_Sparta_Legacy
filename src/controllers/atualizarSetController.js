var atualizarSetModel = require("../models/atualizarSetModel");

function atualizarArmadura(req, res) {

    let idUsuario = req.body.idAvatarServer;
    let idArmadura = req.body.idArmaduraServer;

    atualizarSetModel.atualizarArmadura(idArmadura, idUsuario)
        .then(
            function (resultadoAtualizarArmadura) {
                res.json(resultadoAtualizarArmadura);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar a armadura! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarManopla(req, res) {

    let idUsuario = req.body.idAvatarServer;
    let idManopla = req.body.idManoplaServer;

    atualizarSetModel.atualizarManopla(idManopla, idUsuario)
        .then(
            function (resultadoAtualizarManopla) {
                res.json(resultadoAtualizarManopla);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar a armadura! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    atualizarArmadura,
    atualizarManopla,
};