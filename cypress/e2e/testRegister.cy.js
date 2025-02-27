describe('Testando register da aplicação', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
        cy.get('#signin2')
        .click()
    });
    it('Deve realizar o login com sucesso', () => {
       const dateRegister = {
        username: `User${Math.floor(Math.random() * 1000)}`,
        password: Math.random().toString(36).slice(-8)
    }

    cy.registerSuccess(dateRegister)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    .click()
    });
});