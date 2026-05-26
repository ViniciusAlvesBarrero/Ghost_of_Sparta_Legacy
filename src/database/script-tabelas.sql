CREATE DATABASE gow_legacy;
USE gow_legacy;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(30),
    xpTotal INT,
    metaXp INT
);

CREATE TABLE avatar (
    idAvatar INT PRIMARY KEY AUTO_INCREMENT,
    forca INT,
    velocidade INT,
    vitalidade INT,
    defesa INT,
    fkUsuario INT UNIQUE,
    CONSTRAINT fk_avatar_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE acertosQuiz (
    fkUsuario INT,
    dtResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    qtdAcertos INT,
    numQuiz INT,
    PRIMARY KEY (fkUsuario, dtResposta),
    CONSTRAINT fk_acertos_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE experiencia (
    idExperiencia INT PRIMARY KEY AUTO_INCREMENT,
    xp INT,
    dtXpAdquirido DATE DEFAULT (CURRENT_DATE),
    fkUsuario INT,
    CONSTRAINT fk_experiencia_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE equipamento (
    idEquipamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    precoXp INT,
    tipo VARCHAR(45),
    descricao VARCHAR(100),
    bonusForca DECIMAL(3,2),
    bonusVelocidade DECIMAL(3,2),
    bonusVitalidade DECIMAL(3,2),
    bonusDefesa DECIMAL(3,2)
);

CREATE TABLE arsenal (
    idArsenal INT AUTO_INCREMENT,
    fkAvatar INT,
    fkEquipamento INT,
    CONSTRAINT fk_arsenal_avatar
        FOREIGN KEY (fkAvatar) REFERENCES avatar(idAvatar),
    CONSTRAINT fk_arsenal_equipamento
        FOREIGN KEY (fkEquipamento) REFERENCES equipamento(idEquipamento),
    PRIMARY KEY (idArsenal, fkAvatar, fkEquipamento)
);

CREATE TABLE equipamento_selecionado (
    fkAvatar INT PRIMARY KEY,
    fkArmadura INT,
    fkManoplas INT,
    fkArma INT,
    CONSTRAINT fk_selecionado_avatar
        FOREIGN KEY (fkAvatar) REFERENCES avatar(idAvatar),
    CONSTRAINT fk_selecionado_armadura
        FOREIGN KEY (fkArmadura) REFERENCES equipamento(idEquipamento),
    CONSTRAINT fk_selecionado_manoplas
        FOREIGN KEY (fkManoplas) REFERENCES equipamento(idEquipamento),
    CONSTRAINT fk_selecionado_arma
        FOREIGN KEY (fkArma) REFERENCES equipamento(idEquipamento)
);

CREATE TABLE requisito_equipamento (
    idRequisito INT PRIMARY KEY AUTO_INCREMENT,
    fkEquipamento INT,
    fkEquipamentoAntecessor INT,
    CONSTRAINT fk_requisito_equipamento
        FOREIGN KEY (fkEquipamento) REFERENCES equipamento(idEquipamento),
    CONSTRAINT fk_requisito_antecessor
        FOREIGN KEY (fkEquipamentoAntecessor) REFERENCES equipamento(idEquipamento)
);

INSERT INTO equipamento 
(nome, precoXp, tipo, descricao, bonusForca, bonusVelocidade, bonusVitalidade, bonusDefesa) VALUES
('Armadura Base', 200, 'armadura', 'Armadura inicial simples, resistente e equilibrada para as primeiras batalhas.', 0.15, 0.18, 0.18, 0.22),
('Manopla Base', 50, 'manopla', 'Manoplas simples utilizadas por guerreiros iniciantes.', 0.18, 0.15, 0.12, 0.10),
('Armadura do Esplendor', 400, 'armadura', 'Armadura luminosa inspirada em reinos élficos.', 0.45, 0.55, 0.45, 0.60),
('Manopla do Esplendor', 250, 'manopla', 'Manoplas leves e rápidas em combate.', 0.35, 0.45, 0.25, 0.30),
('Armadura de Zeus', 500, 'armadura', 'Armadura do rei do Olimpo, ofensiva e veloz.', 0.75, 0.85, 0.30, 0.40),
('Manopla de Zeus', 400, 'manopla', 'Manoplas elétricas de alto impacto.', 0.60, 0.75, 0.08, 0.20),
('Armadura de Steinbjorn', 900, 'armadura', 'Armadura colossal de pedra mística.', 0.65, 0.08, 1.05, 2.50),
('Manopla de Steinbjorn', 600, 'manopla', 'Manoplas pesadas e defensivas.', 0.40, 0.08, 0.80, 1.30),
('Machado Leviatã', 500, 'arma', 'Machado lendário de gelo.', 1.40, 0, 0, 1.20),
('Lança Draupnir', 700, 'arma', 'A Lança Draupnir é a arma lendária forjada com o anel mágico que se multiplica', 1.70, 0.00, 0.00, 0.00),
('Lâminas do Caos', 3600, 'arma', 'Lâminas ancestrais da destruição absoluta.', 2.30, 0.00, 0.00, 0.00),
('Vazio', 0, 'arma', 'Kratos sem equipamento', 0.00, 0.00, 0.00, 0.00);

INSERT INTO arsenal (fkAvatar, fkEquipamento) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12);

INSERT INTO equipamento_selecionado (fkAvatar, fkArmadura, fkManoplas, fkArma) VALUES
(1, 1, 2, 9);

UPDATE equipamento_selecionado SET fkArmadura = 7, fkManoplas = 6, fkArma = 9
	WHERE fkAvatar = 1;
    
UPDATE equipamento SET bonusDefesa = 0.00
	WHERE idEquipamento = 9;

select * FROM equipamento_selecionado;

INSERT INTO requisito_equipamento (fkEquipamento, fkEquipamentoAntecessor) VALUES
(3, 1),
(5, 3),
(7, 5),
(4, 2),
(6, 4),
(8, 6),
(10, 9),
(11, 10);

SELECT * FROM acertosQuiz;
SELECT * FROM experiencia;
SELECT * FROM usuario;
SELECT * FROM avatar;
SELECT idEquipamento, nome FROM equipamento;

SELECT SUM(xp) AS totalXp, 
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
	WHERE DATEDIFF(CURDATE(), dtXPAdquirido) <= 7 AND fkUsuario = 1
    GROUP BY fkUsuario, dtXPAdquirido;
    
SELECT MAX(qtdAcertos) AS maxAcertos, CONCAT("Quiz - God of War ", 
	CASE numQuiz
		WHEN 4 THEN "- 2018"
        WHEN 5 THEN "Ragnarök"
        ELSE numQuiz
	END) AS quiz
FROM acertosQuiz
	WHERE fkusuario = 1
	GROUP BY fkUsuario, numQuiz;
    
SELECT ROUND(a.forca * (1 + SUM(e.bonusForca)), 0) AS statusForca, 
ROUND(a.velocidade * (1 + SUM(e.bonusVelocidade)), 0) AS statusVelocidade, 
ROUND(a.vitalidade * (1 + SUM(e.bonusVitalidade)), 0) AS statusVitalidade, 
ROUND(a.defesa * (1 + SUM(e.bonusDefesa)), 0) AS statusDefesa
	FROM equipamento e
	JOIN equipamento_selecionado es ON idEquipamento IN (es.fkArmadura, es.fkManoplas, es.fkArma)
    JOIN avatar a ON a.idAvatar = es.fkAvatar
    WHERE fkAvatar = 1
    GROUP BY fkAvatar;
    