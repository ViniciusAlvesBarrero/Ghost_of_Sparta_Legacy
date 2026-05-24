var obterDadosModel = require("../models/ObterDadosModel");

function buscarDadosQuiz(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.buscarDadosQuiz(idUsuario)
        .then(
            function (resultadoBuscaQuiz) {
                res.json(resultadoBuscaQuiz);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDadosXp(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.buscarDadosXp(idUsuario)
        .then(
            function (resultadoBuscaXp) {
                res.json(resultadoBuscaXp);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDadosAtributos(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.buscarDadosAtributos(idUsuario)
        .then(
            function (resultadoBuscaQuiz) {
                res.json(resultadoBuscaQuiz);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscarDadosXp,
    buscarDadosQuiz,
    buscarDadosAtributos
}