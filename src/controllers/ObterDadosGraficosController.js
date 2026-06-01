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

function buscarMeta(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.buscarMeta(idUsuario)
        .then(
            function (resultadoBuscaMeta) {
                res.json(resultadoBuscaMeta);
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

function buscarXpDiario(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.buscarXpDiario(idUsuario)
        .then(
            function (resultadoBuscaXpDiario) {

                if (resultadoBuscaXpDiario.length >= 1) {
                    res.json(resultadoBuscaXpDiario);
                } else {
                    res.json(0);
                }
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

function BuscarDadosProgressoArvore(req, res) {

    let idUsuario = req.params.idUsuario;

    obterDadosModel.BuscarDadosProgressoArvore(idUsuario)
        .then(
            function (resultadoBuscaProgressoArvore) {
                    res.json(resultadoBuscaProgressoArvore);
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

function BuscarDadosSetAtual(req, res) {

    let idAvatar = req.params.idAvatar;

    obterDadosModel.BuscarDadosSetAtual(idAvatar)
        .then(
            function (resultadoBuscaSetAtual) {
                    res.json(resultadoBuscaSetAtual);
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

function BuscarDadosArsenal(req, res) {

    let idAvatar = req.params.idAvatar;

    obterDadosModel.BuscarDadosArsenal(idAvatar)
        .then(
            function (resultadoBuscaArsenal) {
                    res.json(resultadoBuscaArsenal);
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
    buscarDadosAtributos,
    buscarMeta,
    buscarXpDiario,
    BuscarDadosProgressoArvore,
    BuscarDadosSetAtual,
    BuscarDadosArsenal
}