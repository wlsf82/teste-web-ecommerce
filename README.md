# teste-web-e-commerce

Fork refatorado do projeto do Nathanael.

## Pré-requisitos

É pre-requisito ter o git, Node.js e npm instalados para clonar e executar os testes deste projeto.

> Utilizei as versão `2.42.1`, `v22.13.1` and `10.9.2` do git, Node.js e npm, respectivamente. Sugiro utilizar as mesmas ou versões mais recentes de suporte de longo prazo.

## Instalação

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Testes

> Antes de executar os testes, faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) e nomei-o como `cypress.env.json`. Então, adicione ao mesmo credenciais válidas, as quais serão utilizadas no teste de login. Não se preocupe que o arquivo `cypress.env.json` não é versionado, visto que está listado no arquivo [`.gitignore`](./.gitignore), e portanto, não há risco de versionar dados sensíveis.

Execute `npm test` (ou `npm t` para a versão curta) para rodar os testes em modo _headless_.

Ou, execute `npm run cy:open` para abrir a Cypress App e executar os testes em modo interativo.

Abaixo está o resultado da execução dos testes em modo _headless_.

```sh
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  cart.cy.js                               00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  compatibility.cy.js                      994ms        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e-commerce.cy.js                         00:08        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  filter.cy.js                             00:02        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  login.cy.js                              00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  performance.cy.js                        00:01        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  register.cy.js                           00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:19       12       12        -        -        -

```

## Suporte este projeto

Se você quer suportar este projeto, deixe uma ⭐.

___

Este projeto foi criado com 💚 por [Walmyr](https://walmyr.dev).
