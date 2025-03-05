describe('e-Commerce', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Sony vaio i7').click()
    cy.contains('a', 'Add to cart').click()
    cy.contains('a.nav-link', 'Cart').click()

    cy.contains('table tbody', 'Sony vaio i7').should('be.visible')
  })

  it('Deve remover o item do carrinho ', () => {
    cy.contains('Delete').click()

    cy.contains('table tbody', 'Sony vaio i7').should('not.exist')
  })

  it('Deve realizar a compra com sucesso', () => {
    const orderInfo = {
      name: 'Nathan Henrique',
      country: 'Brazil',
      city: 'Santo André',
      creditcard: '17439107268317236299',
      month: 'December',
      year: '1999',
    }

    cy.buy(orderInfo)

    cy.contains('h2', 'Thank you for your purchase').should('be.visible')

    cy.contains('button', 'OK').click()

    cy.get('.sweet-alert').should('exist')
  })
})
