var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
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

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, xpTotal) VALUES ('${nome}', '${email}', '${senha}', 0);
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

module.exports = {
    autenticar,
    autenticarCadastro,
    cadastrar,
    criarAvatar,
    criarSet
};