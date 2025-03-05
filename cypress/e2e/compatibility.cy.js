describe('Teste de responsividade', () => {
  const viewports = ['iphone-6', 'ipad-2', [1920, 1080]]

  viewports.forEach((size) => {
    it(`Deve exibir corretamente no viewport: ${size}`, () => {
      cy.visit('/')

      if(Array.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.contains('a', 'PRODUCT STORE').should('be.visible')
    })
  })
})
