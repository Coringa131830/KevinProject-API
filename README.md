# Desafio ewally

## como rodar o código

1. yarn (ou npm install) para instalar as dependências.

2. yarn test (npm run test) para executar os testes unitários.

3. yarn start:prod (ou npm run start:prod) para executar em modo de produção.

4. yarn start:dev (ou npm run start:dev) para executar em modo de desenvolvimento.


A arquitetura escolhida para executar o sistema foi a REST, por conta da simplicidade, e pela fácil execução com o ExpressJS.

O código de barras é passado dentro de um objeto "código", no corpo de uma chamada POST à da rota /verifica.

POST /verifica
body:
{
	"codigo": "23793 38128 60038 186197 65000 063308 4 83720000010000"
}

response:
{
  "dataVencimento": "Tue, 08 Sep 2020 02:00:00 GMT",
  "valor": "R$:100",
  "codigoDeBarras": "23794837200000100003381260038186196500006330"
}
