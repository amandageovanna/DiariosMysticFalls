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
 FkDiario int,
 fkUsuario INT, 
 FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
 foreign key (fkDiario) references Diario(idDiario)
 ); 