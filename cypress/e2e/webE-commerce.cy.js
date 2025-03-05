describe('Testando E-Commerce', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Sony vaio i7').click()
    cy.contains('a', 'Add to cart').click()
    cy.contains('a.nav-link', 'Cart').click()
  })

  it('Deve remover o item do carrinho ', () => {
    cy.contains('Delete').click()
  })

  it('Deve realizar a compra com sucesso', () => {
    const data = {
      name: "Nathan Henrique",
      country: "Brazil",
      city: "Santo André",
      creditcard: "17439107268317236299",
      month: "December",
      year: "1999",
    }

    cy.buy(data)

    cy.contains('h2', 'Thank you for your purchase').should('be.visible')
    cy.contains('button', 'OK').click()
  })
})
