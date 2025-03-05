describe('Login', () => {
  beforeEach(() => cy.visit('/'))

  it('Deve fazer login com sucesso', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'))

    cy.contains(
      'a',
      `Welcome ${Cypress.env('username')}`
    ).should('be.visible')
  })
})
