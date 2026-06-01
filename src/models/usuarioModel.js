var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario
            WHERE email = '${email}' AND senha = '${senha}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdAvatar(idUsuario) {
    var instrucaoSql = `
        SELECT idAvatar FROM avatar
            JOIN usuario ON idUsuario = fkUsuario
            WHERE fkUsuario = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarCadastro(email) {
    var instrucaoSql = `
        SELECT email FROM usuario WHERE email = '${email}';
    `;

    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, xpTotal, metaXp) VALUES ('${nome}', '${email}', '${senha}', 0, 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarAvatar(idUsuario) {
    var instrucaoSql = `
        INSERT INTO avatar (forca, velocidade, vitalidade, defesa, fkUsuario)
            SELECT 20, 20, 20, 20, ${idUsuario}
            WHERE NOT EXISTS (
                SELECT 1 
                FROM avatar 
                WHERE fkUsuario = ${idUsuario}
            );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarSet(idUsuario) {
    var instrucaoSql = `
        INSERT INTO equipamento_selecionado (fkAvatar, fkArmadura, fkManoplas, fkArma)
            SELECT a.idAvatar, 12, 12, 12
            FROM avatar a
            WHERE a.fkUsuario = ${idUsuario}
            AND NOT EXISTS (
                SELECT 1 
                FROM equipamento_selecionado es
                WHERE es.fkAvatar = a.idAvatar
            );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarSet(idUsuario) {
    var instrucaoSql = `
        INSERT INTO equipamento_selecionado (fkAvatar, fkArmadura, fkManoplas, fkArma)
            SELECT a.idAvatar, 12, 12, 12
            FROM avatar a
            WHERE a.fkUsuario = ${idUsuario}
            AND NOT EXISTS (
                SELECT 1 
                FROM equipamento_selecionado es
                WHERE es.fkAvatar = a.idAvatar
            );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarArsenal(idUsuario) {
    var instrucaoSql = `
        INSERT INTO arsenal (fkAvatar, fkEquipamento)
            SELECT a.idAvatar, 12
            FROM avatar a
            WHERE a.fkUsuario = ${idUsuario}
            AND NOT EXISTS (
                SELECT 1 
                FROM arsenal ar
                WHERE ar.fkAvatar = a.idAvatar
                AND ar.fkEquipamento = 12
            );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    autenticarCadastro,
    cadastrar,
    criarAvatar,
    criarSet,
    criarArsenal, 
    buscarIdAvatar
};