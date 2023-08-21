# TESTE PSP

## Descrição

Neste Projeto temos o backend de um serviço de pagamento

## Variaveis de Ambiente

Deve ser configuradas algumas veriaveis de ambiente no arquivo **.env**.

### Variaveis :

- SERVER_PORT ; -> Porta do servidor node
- DB_USER ; -> usario que acessara o banco de dados
- DB_PASSWORD ; -> senha para acesso do banco de dados
- DB_NAME ; -> nome do banco
- DB_HOST ; -> host do banco( provavelmente sera **localhost**)

## Banco de dados

A database usada é um banco MYSQL, a query para construir o banco exta anexando no projeto no arquivo **testepsp.sql**. Nele alem da construção do banco, também possui alguns incertes.

## Rotas

Também vai anexado um arquivo chamado **testePSP.postman_collection.json**. Esse é um arquivo criado no software Postman e lene estão os testes da rotas.

## Rodando o servidor

Para rodar o programa precisamos ter o compositor java script node.js instalado;
Dentro da pasta backend rode o comando npm run start:dev;

### Comandos:

- npm run start -> Roda o servidor a partir do aquivos JS já convertidos do TypeScript
- npm run build -> Converte os arquivo TypeScript para o formato JS
- npm run start:dev -> Roda o servidor em mode de desenvolvimento, onde as alterações dos arquivos são interpretadas automaticamente pelo servidor;

_ps: esses scripts estão descritos no arquivo backend/package.json_
