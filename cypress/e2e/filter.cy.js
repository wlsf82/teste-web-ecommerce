describe('Filtro por tipo de produto', () => {
  beforeEach(() => cy.visit('/'))

  const categorias = [
    { nome: 'Phones', produto: 'Iphone 6 32gb' },
    { nome: 'Laptops', produto: 'Dell i7 8gb' },
    { nome: 'Monitors', produto: 'Apple monitor 24' },
  ]

  categorias.forEach(({ nome, produto }) => {
    it(`Deve aplicar filtros para ${nome}`, () => {
      cy.contains('.list-group a', nome).click()

      cy.contains('.card', produto).should('be.visible')
    })
  })
})
