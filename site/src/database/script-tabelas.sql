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

CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY, 
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
Pontuacao INT,
Tentativas INT
);

SELECT * FROM Usuario;
SELECT * FROM Diario;
SELECT * FROM Quiz;

-- COMANDO CRIAR DIÁRIO 
INSERT INTO Diario (Titulo, Conteudo, FkUsuario) VALUES 
    ('Notas de novembro', 'Que dia bonito tive hoje!', 1);
    
-- COMANDO OBTER ULTIMOS DIÁRIOS 
 SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    ORDER BY idDiario DESC;    

-- ATUALIZAR DIÁRIO 
    UPDATE Diario
    SET Titulo = 'Novembro, dia ensolarado', Conteudo = 'Que dia massa! Hoje tomei um STARBUCKS'
    WHERE idDiario = 1;
    
-- DELETAR
 DELETE FROM Diario
        WHERE idDiario = 1;    
        
 -- BUSCAR DIARIO POR USUARIO (ULTIMAS ENTRADAS PARA EDITAR E EXCLUIR)       
SELECT idDiario, Titulo, Conteudo, dtCriacao
    FROM Diario
    WHERE FkUsuario = 1
    ORDER BY dtCriacao DESC;        
    
-- BUSCAR QUANTIDADE DE DIARIO POR USUARIO 
 SELECT COUNT(idDiario) AS qtdeDiario FROM Diario
        JOIN Usuario ON fkUsuario = idUsuario
        WHERE idUsuario = 1 and MONTH(dtCriacao) = 11;  
        
-- BUSCAR QUANTIDADE DE DIARIO POR MÊS
SELECT COUNT(idDiario) AS qtdeDiario, MONTH(dtCriacao) AS mes 
    FROM diario 
    WHERE fkUsuario = 1 
    AND dtCriacao BETWEEN '2023-01-01 00:00:00' AND '2023-12-31 23:59:59' 
    GROUP BY mes;
    
-- BUSCAR PONTUACAO QUIZ
 SELECT Pontuacao, Tentativas FROM quiz 
   WHERE fkUsuario = 1;
   
--    

INSERT INTO Quiz (idQuiz, fkUsuario, Pontuacao, Tentativas) VALUES 
    (1, 1, 5, 1);