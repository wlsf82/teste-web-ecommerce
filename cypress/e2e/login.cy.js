describe('Testando o login da aplicação', () => {
  beforeEach(() => cy.visit('/'))

  it('Deve realizar o login com sucesso', () => {
    cy.login('User', 'crc79cyj')
  })
})
