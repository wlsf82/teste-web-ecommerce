describe('Testando E-Commerce', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com')
  });
  it('Deve haver um titulo escrito "PRODUCT STORE', () => {
    cy.get('#nava')
    .should('be.visible')
  })

  it("Deve adiocionar o item produto no carrinho", () => {
    cy.contains('Sony vaio i7')
    .click()
    cy.get('.btn.btn-success.btn-lg')
    .click()
    cy.get('#cartur')
    .click()
  })

  it('Deve remover o item do carrinho ', () => {
    cy.contains('Sony vaio i7')
    .click()
    cy.get('.btn.btn-success.btn-lg')
    .click()
    cy.get('#cartur')
    .click()
    cy.contains('Delete')
    .click()
  })

  it.only('Deve realizar a compra com sucesso', () => {
    cy.contains('Sony vaio i7')
    .click()
    cy.get('.btn.btn-success.btn-lg')
    .click()
    cy.get('#cartur')
    .click()
    cy.get('.btn.btn-success')
    .click()

    const date = {
      name: "Nathan Henrique",
      country: "Brazil",
      city: "Santo André",
      creditcard: "17439107268317236299",
      month: "December",
      year: "1999",
    }

    cy.buySuccess(date)

    cy.contains('Purchase')
    .click()

    cy.contains('h2', 'Thank you for your purchase')
    cy.get('.confirm')
    .click()
  })
})