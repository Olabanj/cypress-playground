// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
//Cypress.Commands.add('dragTo', { prevSubject: 'element'}, (subject, targetElemet) => { ... })
Cypress.Commands.add('dragTo', { prevSubject: 'element' }, (subject, targetSelector) => {
    cy.wrap(subject).trigger('dragstart', { dataTransfer: new DataTransfer() });
    cy.get(targetSelector).trigger('drop', { dataTransfer: new DataTransfer() });
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('TypeAField', (text_field,text_to_insert) => {  
    cy.get(text_field).should("exist").type(text_to_insert)
})
Cypress.Commands.add('ClickButton',(element)=>{
    cy.get(element).should("exist").and("be.visible").click()

})