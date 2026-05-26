var definirMetaModel = require("../models/definirMetaModel");

function registrarMeta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var meta = req.body.metaServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (meta == undefined) {
        res.status(400).send("Sua meta está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        definirMetaModel.registrarMeta(meta, idUsuario)
            .then(
                function (resultadoMeta) {
                    res.json(resultadoMeta);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarMeta
}