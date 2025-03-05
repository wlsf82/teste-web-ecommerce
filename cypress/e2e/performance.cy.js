describe('Performance', () => {
  it('Deve carregar a pagina em menos de 2 segundos', () => {
    cy.visit('/', { timeout: 2000 })
  })
})
