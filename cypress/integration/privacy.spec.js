Cypress._.times(3, () => {
    it('testa a página da política de privacidade de forma independente', function () {
        cy.visit('./src/privacy.html')

    })

})