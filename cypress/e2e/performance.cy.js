describe('Performance', () => {
  it('Deve carregar a pagina em menos de 2 segundos', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/entries`)
      .as('apiRequest')

    cy.visit('/', { timeout: 2000 })

    cy.wait('@apiRequest')
      .its('response.statusCode')
      .should('be.equal', 200)
  })
})
