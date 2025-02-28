describe('Testando o filtro da aplicação', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
    });

    const categorias = [
        {nome: "Phones", produtoEsperado: "Iphone 6 32gb"},
        {nome: "Laptops", produtoEsperado: "Dell i7 8gb"},
        {nome: "Monitors", produtoEsperado: "Apple monitor 24"}
    ]

    categorias.forEach(({nome, produtoEsperado}) => {
        it(`Deve filtrar todos os produtos com a categoria ${nome}`, () => {
            cy.contains(nome)
            .click()

            cy.contains(produtoEsperado)
            .should('be.visible')
        })
    })
}); 