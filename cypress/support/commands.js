
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Douglas')
    cy.get('#lastName').type('Barbosa')
    cy.get('#email').type('douglasrios2007@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
