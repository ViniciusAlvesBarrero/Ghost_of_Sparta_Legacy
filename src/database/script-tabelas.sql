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
    bonusForca DECIMAL(3,2),
    bonusVelocidade DECIMAL(3,2),
    bonusVitalidade DECIMAL(3,2),
    bonusDefesa DECIMAL(3,2)
);

CREATE TABLE arsenal (
    fkAvatar INT,
    fkEquipamento INT,
    CONSTRAINT fk_arsenal_avatar
        FOREIGN KEY (fkAvatar) REFERENCES avatar(idAvatar),
    CONSTRAINT fk_arsenal_equipamento
        FOREIGN KEY (fkEquipamento) REFERENCES equipamento(idEquipamento),
    PRIMARY KEY (fkAvatar, fkEquipamento)
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
    fkEquipamento INT,
    fkEquipamentoAntecessor INT,
    CONSTRAINT fk_requisito_equipamento
        FOREIGN KEY (fkEquipamento) REFERENCES equipamento(idEquipamento),
    CONSTRAINT fk_requisito_antecessor
        FOREIGN KEY (fkEquipamentoAntecessor) REFERENCES equipamento(idEquipamento),
	PRIMARY KEY (fkEquipamento, fkEquipamentoAntecessor)
);

INSERT INTO equipamento 
(nome, precoXp, tipo, bonusForca, bonusVelocidade, bonusVitalidade, bonusDefesa) VALUES
('Armadura de Couro', 200, 'armadura', 0.15, 0.18, 0.18, 0.22),
('Manopla de Couro', 50, 'manopla', 0.18, 0.15, 0.12, 0.10),
('Armadura do Esplendor', 400, 'armadura', 0.45, 0.90, 0.45, 0.60),
('Manopla do Esplendor', 250, 'manopla', 0.35, 0.65, 0.25, 0.30),
('Armadura de Zeus', 500, 'armadura', 0.75, 0.85, 0.30, 0.40),
('Manopla de Zeus', 400, 'manopla', 0.60, 0.75, 0.08, 0.20),
('Armadura de Steinbjorn', 900, 'armadura', 0.65, 0.08, 1.50, 2.50),
('Manopla de Steinbjorn', 600, 'manopla', 0.40, 0.08, 1.20, 1.30),
('Machado Leviatã', 500, 'arma', 1.40, 0, 0, 0.20),
('Lança Draupnir', 700, 'arma', 1.70, 1.40, 0.00, 0.00),
('Lâminas do Caos', 3600, 'arma', 2.30, 0.00, 0.00, 0.00),
('Vazio', 0, 'arma', 0.00, 0.00, 0.00, 0.00),
('Vazio', 0, 'manopla', 0.00, 0.00, 0.00, 0.00),
('Vazio', 0, 'armadura', 0.00, 0.00, 0.00, 0.00);

INSERT INTO requisito_equipamento (fkEquipamento, fkEquipamentoAntecessor) VALUES
(1, 12),
(2, 12),
(3, 1),
(4, 2),
(5, 3),
(6, 4),
(7, 5),
(8, 6),
(9, 12),
(10, 9),
(11, 10);