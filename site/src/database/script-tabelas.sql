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
 fkUsuario INT,
 foreign key (fkUsuario) references Usuario(idUsuario)
 );
 
  CREATE TABLE Paginas (
 idPagina INT PRIMARY KEY auto_increment,
 Titulo VARCHAR (200) NOT NULL,
 Conteudo TEXT NOT NULL, 
 dtCriacao DATETIME default NOW(),
 FkDiario INT, 
 FOREIGN KEY (fkDiario) references Diario(idDiario)
 ); 
   
    select * from paginas;
    select * from usuario;    
    select * from diario;
    select * from pontuacaoquiz;    
    
 CREATE TABLE pontuacaoQuiz (
idPontuacao int primary key auto_increment,
acertos int,
pontuacao int,
fkUsuario int,
constraint fkUser foreign key (fkUsuario) references usuario(idUsuario)
);     
   
   
   -- CRIAR DIÁRIO -- 
    INSERT INTO Paginas (Titulo, Conteudo, fkDiario, dtCriacao) VALUES 
    ('Memórias de novembro', 'Hoje foi um dia maluco! Estou muito animada...', 1, NOW());
    
    -- ATUALIZAR DIÁRIO -- 
    UPDATE Paginas
    SET Titulo = 'Memórias de dezembro', Conteudo = 'Hoje foi um dia lindo! Estou muito sonolenta...'
    WHERE idPagina = 1;
    
    -- DELETAR DIÁRIO -- 
     DELETE FROM Paginas
     WHERE idPagina = 1;
     
    -- BUSCAR DIÁRIOS POR USUÁRIO -- 
     SELECT idPagina, Titulo, Conteudo, dtCriacao
    FROM Paginas
    WHERE fkDiario = 1
    ORDER BY dtCriacao DESC;
    
    -- LISTAR QUANTIDADE DE DIÁRIO  -- 
    SELECT COUNT(Paginas.idPagina) AS qtdeDiario FROM Paginas
        JOIN Diario ON Paginas.FkDiario = Diario.idDiario
        WHERE Diario.fkUsuario = 1 AND MONTH(Paginas.dtCriacao) = 11;
        
    -- BUSCAR MÊS  --     
    SELECT COUNT(idPagina) AS qtdeDiario, MONTH(dtCriacao) AS mes 
    FROM Paginas 
    WHERE fkDiario = 1 
    AND dtCriacao BETWEEN '2023-01-01 00:00:00' AND '2023-12-31 23:59:59' 
    GROUP BY mes;
    
    -- INSERIR VALORES NO QUIZ -- 
     INSERT INTO pontuacaoQuiz (fkUsuario, Pontuacao, Acertos) VALUES 
    (1, 3, 9);
    
    -- CONSULTAR QUIZ -- 
    SELECT * FROM pontuacaoQuiz 
    WHERE fkUsuario = 1;
    
    -- ATUALIZAR QUIZ - 
    UPDATE pontuacaoQuiz SET acertos = 4, Pontuacao = 12
    WHERE fkUsuario = 1;
