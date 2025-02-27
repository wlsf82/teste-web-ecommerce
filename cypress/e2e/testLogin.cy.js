describe('Testando o login da aplicação', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
        
    });
    it('Deve realizar o login com sucesso', () => {
        cy.get('#signin2').click()
        cy.get('#sign-username').type("User")
        cy.get('#sign-password').type("crc79cyj")
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span')
        .click()
        cy.get('#login2').click()
        const dateLogin = {
            username: "User",
            password: "crc79cyj" 
        }
        cy.loginSuccess(dateLogin)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
});