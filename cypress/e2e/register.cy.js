describe('Testando register da aplicação', () => {
  beforeEach(() => cy.visit('/'))

  it('Deve realizar o login com sucesso', () => {
    const username = `User${Math.floor(Math.random() * 1000)}`
    const password = Math.random().toString(36).slice(-8)

    cy.signup(username, password)
  })
})
