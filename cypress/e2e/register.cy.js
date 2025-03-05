import { faker } from '@faker-js/faker/locale/en'

describe('Registro', () => {
  beforeEach(() => cy.visit('/'))

  it('Deve realizar o registro com sucesso', () => {
    const alertShown = cy.stub().as('alertShown')
    const username = `User-${faker.string.uuid()}`
    const password = faker.string.uuid()

    cy.on('window:alert', alertShown)

    cy.signup(username, password)

    cy.get('@alertShown').should('have.been.calledOnceWith', 'Sign up successful.')
  })
})
