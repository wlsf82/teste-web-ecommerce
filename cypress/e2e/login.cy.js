describe('Login', () => {
  beforeEach(() => cy.visit('/'))

  it('Deve realizar o login com sucesso', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })
})
