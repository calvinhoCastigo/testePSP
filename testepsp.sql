CREATE DATABASE IF NOT EXISTS testepsp;

USE testepsp;

CREATE TABLE cliente(
    idCliente INT NOT NULL UNIQUE AUTO_INCREMENT,
    nomeCliente VARCHAR(20) NOT NULL,
    saldoCliente INT,
    PRIMARY KEY(idCliente)
);

CREATE TABLE transacao(
    idTransacao INT NOT NULL UNIQUE AUTO_INCREMENT,
    idCliente INT NOT NULL,
    descricaoTransacao VARCHAR(120),
    dataTransacao DATE,
    tipoTransacao VARCHAR(1),
    valorTransacao FLOAT,
    is_pendenteTransacao BOOLEAN,
    numeroCartao VARCHAR(4) NOT NULL,
    cvvCartao VARCHAR(3) NOT NULL,
    validadeCartao DATETIME NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
    PRIMARY KEY(idTransacao)
);
INSERT INTO cliente(idCliente,nomeCliente,saldoCliente) VALUES(1,"Álvaro",5000);
INSERT INTO cliente(idCliente,nomeCliente,saldoCliente) VALUES(2,"Mariana",8222);

INSERT INTO transacao (idCliente, descricaoTransacao, dataTransacao, tipoTransacao, valorTransacao, is_pendenteTransacao, numeroCartao, cvvCartao, validadeCartao)
VALUES
(1, 'Compra de eletrônicos', '2023-08-20', 'R', 500.00, FALSE, '1234', '789', '2025-12-31'),
(2, 'Pagamento de conta de luz', '2023-08-19', 'P', 50.00, TRUE, '5678', '456', '2024-10-15'),
(1, 'Transferência bancária', '2023-08-18', 'P', 200.00, FALSE, '9876', '123', '2026-05-28');



DROP DATABASE testepsp;
DROP TABLE transacao;