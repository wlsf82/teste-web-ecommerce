describe('Testando a funcionalidade o carrinho da aplicação ', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
    });
    const produtos = [
        {nome: 'Sony vaio i5'},
        {nome: 'Sony vaio i7'},
        {nome: 'MacBook air'},
        {nome: 'Dell i7 8gb'},
        {nome: '2017 Dell 15.6 Inch'},
        {nome: 'MacBook Pro'}
    ]
    
    produtos.forEach(({nome}) => {
        it('Deve adicionar os produtos ao carrinho', () => {
            cy.contains('Laptops').click()
            cy.get('.card-title').contains(nome).click()
            cy.contains('Add to cart', {timeout: 10000}).should('be.visible').click()
        });
    })
});