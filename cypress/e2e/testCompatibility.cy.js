describe('Teste de responsividade', () => {
    const viewports = ['iphone-6', 'ipad-2', [1920, 1080]]

    viewports.forEach((size) => {
        it(`Deve exibir corretamente o ${size}`, () => {
            cy.visit('https://www.demoblaze.com')
            
            if(Array.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.get('#nava')
            .should('be.visible')
        });
    })
});