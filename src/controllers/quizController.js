var quizModel = require("../models/quizModel");

function registrarResultadoQuiz(req, res) {

    let qtdAcertos = req.body.acertosServer;
    let numQuiz = req.body.quizServer;
    let idUsuario = req.body.idUsuarioServer;
    
    quizModel.registrarResultadoQuiz(qtdAcertos, numQuiz, idUsuario)
    .then(
        function(resultadoRegistrar) {
            res.json(resultadoRegistrar);
        }
    ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar dados do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function atualizarXp(req, res) {
    
    let totalXp = req.body.xpServer;
    let idUsuario = req.body.idUsuarioServer;
    
    quizModel.registrarXp(totalXp, idUsuario);

    quizModel.atualizarXp(totalXp, idUsuario)
        .then(
            function(resultadoAtualizarXp) {
                    res.json(resultadoAtualizarXp);
            }
        ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar dados do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    registrarResultadoQuiz,
    atualizarXp
};