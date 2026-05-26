var database = require("../database/config")

function buscarDadosXp(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT 
            SUM(xp) AS qtdXp, 
                CASE DAYNAME(dtXpAdquirido)
                    WHEN 'Sunday' THEN 'Domingo'
                    WHEN 'Monday' THEN 'Segunda-feira'
                    WHEN 'Tuesday' THEN 'Terça-feira'
                    WHEN 'Wednesday' THEN 'Quarta-feira'
                    WHEN 'Thursday' THEN 'Quinta-feira'
                    WHEN 'Friday' THEN 'Sexta-feira'
                    WHEN 'Saturday' THEN 'Sábado'
                END AS dia 
            FROM experiencia
                WHERE DATEDIFF(CURDATE(), dtXPAdquirido) <= 7 AND fkUsuario = ${idUsuario}
                GROUP BY fkUsuario, dtXPAdquirido;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuiz(idUsuario) {
    var instrucaoSql = `
        SELECT 
        MAX(qtdAcertos) AS acertos, CONCAT("God of War ", 
            CASE numQuiz
                WHEN 4 THEN "- 2018"
                WHEN 5 THEN "Ragnarök"
                ELSE numQuiz
            END) AS quiz
        FROM acertosQuiz
            WHERE fkusuario = ${idUsuario}
            GROUP BY fkUsuario, numQuiz;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosAtributos(idUsuario) {
    var instrucaoSql = `
        SELECT 
            ROUND(a.forca * (1 + SUM(e.bonusForca)), 0) AS statusForca, 
            ROUND(a.velocidade * (1 + SUM(e.bonusVelocidade)), 0) AS statusVelocidade, 
            ROUND(a.vitalidade * (1 + SUM(e.bonusVitalidade)), 0) AS statusVitalidade, 
            ROUND(a.defesa * (1 + SUM(e.bonusDefesa)), 0) AS statusDefesa
	    FROM equipamento e
	        JOIN equipamento_selecionado es ON idEquipamento IN (es.fkArmadura, es.fkManoplas, es.fkArma)
            JOIN avatar a ON a.idAvatar = es.fkAvatar
            WHERE fkAvatar = ${idUsuario}
            GROUP BY fkAvatar;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMeta(idUsuario) {
    var instrucaoSql = `
        SELECT metaXp AS metaDiaria FROM usuario
            WHERE ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosXp,
    buscarDadosQuiz,
    buscarDadosAtributos,
    buscarMeta
};