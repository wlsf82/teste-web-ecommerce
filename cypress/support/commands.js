Cypress.Commands.add('buy', ({ name, country, city, creditcard, month, year }) => {
  cy.contains('button', 'Place Order').click()
  cy.get('#name').type(name)
  cy.get('#country').type(country)
  cy.get('#city').type(city)
  cy.get('#card').type(creditcard)
  cy.get('#month').type(month)
  cy.get('#year').type(year)
  cy.contains('button', 'Purchase').click()
})

Cypress.Commands.add("signup", (username, password) => {
  cy.contains('a.nav-link', 'Sign up').click()
  cy.get('#sign-username').type(username)
  cy.get('#sign-password').type(password)
  cy.contains('button', 'Sign up').click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.contains('a.nav-link', 'Log in').click()
  cy.get('#loginusername').type(username)
  cy.get('#loginpassword').type(password, { log: false })
  cy.contains('button', 'Log in').click()
})
