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
 Hora TIME NOT NULL,
 Mes VARCHAR(12) NOT NULL,
 Ano INT NOT NULL,
 FkUsuario int,
 foreign key (FkUsuario) references Usuario(idUsuario)
 ); 
 
CREATE TABLE MetricaMensal (
Mes VARCHAR(12),
Ano INT,
qtdDiariosMensal INT,
fkUsuario INT,
PRIMARY KEY (Mes, Ano),
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY, 
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
Pontuacao INT
);
