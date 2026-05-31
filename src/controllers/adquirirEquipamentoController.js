var adquirirEquipamentoModel = require("../models/adquirirEquipamentoModel");

function adquirirEquipamento(req, res) {
    let idAvatar = req.body.idAvatarServer;
    let idEquipamento = req.body.idEquipamentoServer;

    adquirirEquipamentoModel.verificarCompra(idAvatar, idEquipamento)
        .then(function (resultadoCompra) {
            if (Number(resultadoCompra[0].preco) <= Number(resultadoCompra[0].xpTotal)) {
                adquirirEquipamentoModel.comprar(idAvatar, idEquipamento)
                    .then(function () {
                        return adquirirEquipamentoModel.atualizarArsenal(idAvatar, idEquipamento)
                    }).then(
                        function (resultadoAtualizarArsenal) {
                            res.json({
                                resultadoAtualizarArsenal,
                            });
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
                    )
            } else {
                res.status(422).send("XP insuficiente!");
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

function buscarQtdXP(req, res) {
    let idAvatar = req.params.idAvatar;

    adquirirEquipamentoModel.verificarCompra(idAvatar, null)
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

function buscarArsenal(req, res) {
    let idAvatar = req.params.idAvatar;

    adquirirEquipamentoModel.buscarArsenal(idAvatar, null)
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

function buscarRequisito(req, res) {
    let idAvatar = req.params.idAvatar;

    adquirirEquipamentoModel.buscarRequisito(idAvatar, null)
        .then(
            function (resultadoBuscaRequisito) {
                res.json(resultadoBuscaRequisito);
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
    adquirirEquipamento,
    buscarQtdXP,
    buscarArsenal,
    buscarRequisito
}