Cypress.Commands.add('buySuccess', (date) => {
    cy.get('#name').type(date.name)
    cy.get('#country').type(date.country)
    cy.get('#city').type(date.city)
    cy.get('#card').type(date.creditcard)
    cy.get('#month').type(date.month)
    cy.get('#year').type(date.year)
})