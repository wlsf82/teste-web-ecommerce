describe('Testando a funcionalidade o carrinho da aplicação', () => {
  beforeEach(() => cy.visit('/'))

  const produtos = [
    'Sony vaio i5',
    'Sony vaio i7',
    'MacBook air',
    'Dell i7 8gb',
    '2017 Dell 15.6 Inch',
    'MacBook Pro',
  ]

  produtos.forEach(produto => {
    it('Deve adicionar os produtos ao carrinho', () => {
      cy.contains('a', 'Laptops').click()
      cy.contains('.card-title', produto).click()
      cy.contains('Add to cart', { timeout: 10000 }).click()
    })
  })
})
