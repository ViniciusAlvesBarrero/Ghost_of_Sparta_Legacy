var database = require("../database/config");

function atualizarArmadura(idArmadura, idAvatar) {
    var instrucaoSql = `
        UPDATE equipamento_selecionado SET fkArmadura = ${idArmadura}
            WHERE fkAvatar = ${idAvatar};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function atualizarManopla(idManopla, idAvatar) {
    var instrucaoSql = `
        UPDATE equipamento_selecionado SET fkManoplas = ${idManopla}
            WHERE fkAvatar = ${idAvatar};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    atualizarArmadura,
    atualizarManopla
}