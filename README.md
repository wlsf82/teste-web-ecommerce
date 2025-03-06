# teste-web-e-commerce

Fork refatorado do projeto do Nathanael.

## Pré-requisitos

É pre-requisito ter o git, Node.js e npm instalados para clonar e executar os testes deste projeto.

> Utilizei as versão `2.42.1`, `v22.13.1` and `10.9.2` do git, Node.js e npm, respectivamente. Sugiro utilizar as mesmas ou versões mais recentes de suporte de longo prazo.

## Instalção

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Testes

> Antes de executar os testes, faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) e nomei-o como `cypress.env.json`. Então, adicione ao mesmo credenciais válidas, as quais serão utilizadas no teste de login. Não se preocupe que o arquivo `cypress.env.json` não é versionado, visto que está listado no arquivo [`.gitignore`](./.gitignore), e portanto, não há risco de versionar dados sensíveis.

Execute `npm test` (ou `npm t` para a versão curta) para rodar os testes em modo _headless_.

Ou, execute `npm run cy:open` para abrir a Cypress App e executar os testes em modo interativo.

## Suporete este projeto

Se você quer suportar este projeto, deixe uma ⭐.

___

Este projeto foi criado com 💚 por [Walmyr](https://walmyr.dev).
