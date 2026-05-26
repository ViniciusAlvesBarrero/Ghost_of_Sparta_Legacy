var database = require("../database/config");

function registrarMeta(meta, idUsuario) {
    var instrucaoSql = `
            UPDATE usuario SET metaXp = ${meta} WHERE idUsuario = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    registrarMeta
}