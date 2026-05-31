var database = require("../database/config");

function atualizarArsenal(idAvatar, idEquipamento) {
    var instrucaoSql = `
            INSERT INTO arsenal (fkAvatar, fkEquipamento) VALUES
            (${idAvatar}, ${idEquipamento});
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function verificarCompra(idAvatar, idEquipamento) {
    var instrucaoSql = `
        SELECT 
            (SELECT 
                precoXp 
                FROM equipamento
                WHERE idEquipamento = ${idEquipamento}) AS preco, 
            xpTotal 
            FROM usuario
            JOIN avatar ON idUsuario = fkUsuario
            WHERE idAvatar = ${idAvatar};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function comprar(idAvatar, idEquipamento) {
    var instrucaoSql = `
        UPDATE usuario 
		    JOIN avatar ON idUsuario = fkUsuario
            SET xpTotal = xpTotal - (SELECT precoXP FROM equipamento WHERE idEquipamento = ${idEquipamento}) 
            WHERE idAvatar = ${idAvatar};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarArsenal(idAvatar) {
    var instrucaoSql = `
       SELECT CONCAT('equipamento', fkEquipamento) AS idEquipamento FROM arsenal
	        WHERE fkAvatar = ${idAvatar}
            AND fkEquipamento <> 12;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarRequisito(idAvatar) {
    var instrucaoSql = `
        SELECT CONCAT('equipamento', re.fkEquipamento) AS proximoEquipamento 
            FROM requisito_equipamento re
                JOIN equipamento e ON e.idEquipamento = re.fkEquipamento
                LEFT JOIN arsenal a ON a.fkEquipamento = e.idEquipamento
                WHERE re.fkEquipamentoAntecessor IN 
                    (SELECT fkEquipamento FROM arsenal 
                    WHERE fkAvatar = ${idAvatar}) 
                    AND re.fkEquipamento NOT IN 
                    (SELECT fkEquipamento FROM arsenal 
                    WHERE fkAvatar = ${idAvatar});
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    atualizarArsenal,
    verificarCompra,
    comprar,
    buscarArsenal,
    buscarRequisito
}