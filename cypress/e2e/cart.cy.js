describe('Carrinho de compras', () => {
  beforeEach(() => cy.visit('/'))

  it("Deve adicionar o laptop 'MacBook Pro' ao carrinho", () => {
    const alertShown = cy.stub().as('alertShown')

    cy.on('window:alert', alertShown)

    cy.contains('a', 'Laptops').click()
    cy.contains('.card-title', 'MacBook Pro').click()
    cy.contains('Add to cart', { timeout: 10000 }).click()

    cy.get('@alertShown').should('have.been.calledOnceWith', 'Product added')
  })
})
