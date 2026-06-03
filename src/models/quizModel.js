var database = require("../database/config")

function registrarResultadoQuiz(qtdAcertos, numQuiz, idUsuario) {
    var instrucaoSql = `
            INSERT INTO acertosQuiz (qtdAcertos, numQuiz, fkUsuario) VALUES ('${qtdAcertos}', '${numQuiz}', '${idUsuario}');
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarXp(totalXp, idUsuario) {
    var instrucaoSql = `
            UPDATE usuario SET xpTotal = xpTotal + ${totalXp} WHERE idUsuario = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarXp(totalXp, idUsuario) {
    var instrucaoSql = `
            INSERT INTO experiencia (fkUsuario, xp) VALUES ('${idUsuario}', '${totalXp}');
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultadoQuiz,
    atualizarXp, 
    registrarXp
};