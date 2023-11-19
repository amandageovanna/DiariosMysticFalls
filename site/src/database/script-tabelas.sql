CREATE DATABASE DiariosMysticFalls;
USE DiariosMysticFalls;

CREATE TABLE Usuario (
 idUsuario INT PRIMARY KEY auto_increment,
 NomeCompleto VARCHAR (150) NOT NULL, 
 Email VARCHAR(90) UNIQUE,
 Senha VARCHAR(50) NOT NULL
 );
  
 CREATE TABLE Diario (
 idDiario INT PRIMARY KEY auto_increment,
 Titulo VARCHAR (200) NOT NULL,
 Conteudo TEXT NOT NULL, 
 dtCriacao datetime DEFAULT NOW(), 
 FkUsuario int,
 foreign key (FkUsuario) references Usuario(idUsuario)
 );  

-- Agosto
INSERT INTO Diario  (titulo, conteudo, fkUsuario) VALUES
  ('Acontecimentos em Agosto 1', 'Primeiro diário de agosto.', 1),
  ('Explorações de Agosto 4', 'Descobrindo novos lugares em agosto.', 1);

  INSERT INTO Diario (Titulo, Conteudo, FkUsuario, dtCriacao) VALUES 
    ('aaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasdasdasdasdas', 1, NOW());

-- Setembro
-- INSERT INTO Diario (idDiario, titulo, conteudo, hora, mes, ano, fkUsuario) VALUES
--  (8, 'Aventuras de Setembro 1', 'Início das aventuras de setembro.', '09:00:00', 'Setembro', 2023, 2),
-- (9, 'Diário de Setembro 2', 'Registro do segundo dia de setembro.', '14:45:00', 'Setembro', 2023, 3),
-- (10, 'Jornada de Setembro 3', 'Continuando a jornada em setembro.', '20:30:00', 'Setembro', 2023, 1),
-- (11, 'Explorações de Setembro 4', 'Explorando ainda mais em setembro.', '23:00:00', 'Setembro', 2023, 2),
-- (12, 'Acontecimentos de Setembro 5', 'Mais eventos interessantes em setembro.', '17:30:00', 'Setembro', 2023, 3);

select count(idDiario) as 'quantidade de diários', mes, ano
from diario
where fkUsuario = 1
GROUP BY mes, ano;

select count(idDiario) as 'quantidade total de diários'
from diario
where fkUsuario = 1;

select * from usuario;
select * from diario;


SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    WHERE FkUsuario = 1
    ORDER BY dtCriacao DESC
    LIMIT 4;

SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    WHERE FkUsuario = idUsuario
    ORDER BY dtCriacao DESC;

-- Novembro
INSERT INTO Diario (idDiario, titulo, conteudo, hora, mes, ano, fkUsuario) VALUES
 (13, 'Novas Descobertas em Novembro 1', 'Primeiro diário de novembro.', '10:00:00', 'Novembro', 2023, 1),
-- (14, 'Reflexões de Novembro 2', 'Reflexões profundas em novembro.', '15:45:00', 'Novembro', 2023, 2),
-- (15, 'Aventuras de Novembro 3', 'Aventuras emocionantes em novembro.', '19:30:00', 'Novembro', 2023, 3),
-- (16, 'Diário de Novembro 4', 'Registro do quarto dia de novembro.', '21:00:00', 'Novembro', 2023, 1),
-- (17, 'Explorações de Novembro 5', 'Continuando as explorações em novembro.', '16:15:00', 'Novembro', 2023, 2);



-- CREATE TABLE MetricaMensal (
-- Mes VARCHAR(12),
-- Ano INT,
-- qtdDiariosMensal INT,
-- fkUsuario INT,
-- PRIMARY KEY (Mes, Ano),
-- FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
-- );

CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY, 
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
Pontuacao INT
);

-- INSERT INTO Quiz (idQuiz, numeroTentativa, fkUsuario, Pontuacao) VALUES
-- (1, 1, 10),
-- (1, 2, 9),
-- (1, 3, 6);
