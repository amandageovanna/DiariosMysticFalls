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
 dtCriacao DATETIME default NOW(),
 FkUsuario int,
 foreign key (FkUsuario) references Usuario(idUsuario)
 );  


 INSERT INTO Diario (titulo, conteudo, fkUsuario) VALUES
  ('Acontecimentos em Agosto 1', 'Primeiro diário de agosto.', 1);

select count(idDiario) as 'quantidade de diários', mes, ano
from diario
where fkUsuario = 1
GROUP BY mes, ano;

select count(idDiario) as 'quantidade total de diários'
from diario
where fkUsuario = 1;

select * from usuario;
select * from diario;

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
