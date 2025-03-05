describe('Testando o filtro da aplicação', () => {
  beforeEach(() => cy.visit('/'))

  const categorias = [
    { nome: "Phones", produto: "Iphone 6 32gb" },
    { nome: "Laptops", produto: "Dell i7 8gb" },
    { nome: "Monitors", produto: "Apple monitor 24" },
  ]

  it('aplica filtros', () => {
    categorias.forEach(({ nome, produto }) => {
	    cy.contains(nome).click()

      cy.contains(produto).should('be.visible')
    })
  })
})
