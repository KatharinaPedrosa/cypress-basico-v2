Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Katharina').should('have.value', 'Katharina')
    cy.get('#lastName').type('Pedrosa')
    cy.get('#email').type('katharinapedrosa@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})
