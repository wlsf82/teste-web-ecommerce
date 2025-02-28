describe('Testando o login da aplicação', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
        cy.get('#login2').click()
    });
    it('Deve realizar o login com sucesso', () => {
        const dateLogin = {
            username: "User",
            password: "crc79cyj" 
        }
        cy.loginSuccess(dateLogin)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
});