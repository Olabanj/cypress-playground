let sel;
describe("ShadowElement",()=>{
    before(()=>{
        cy.visit('https://www.saucedemo.com/',{failOnStatusCode: false})
    })
    // cy.fixture("selectors").then((selectors)=>{
    //     sel = selectors
    // })
    it("should be created",()=>{
        cy.fixture('selectors').then((data)=>{
            sel = data
        
        cy.TypeAField(sel.emailField,sel.email)
        cy.TypeAField(sel.passwordField,sel.password)
        cy.ClickButton(sel.loginButton)  
      
       
    })
})

})



// Cypress.Commands.add('TypeAField', (text_field,text_to_insert) => {  
//     cy.get(text_field).should("exist").type(text_to_insert)
// })
// Cypress.Commands.add('ClickButton',(element)=>{
//     cy.get(element).should("exist").and("be.visible").click()

// })

// When(/^User Clicks Sign Up Button$/, () => {
// 	cy.clickElement(sel.signUpPage.signupButton)
// });

// When(/^User fills in a valid full name$/, () => {
// 	cy.typeAValue(sel.basicDetailsPage.fullnameField, faker.person.fullName())
// });
