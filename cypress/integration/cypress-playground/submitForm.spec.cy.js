describe("Form",()=>{
    it("submit form",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo']").should("exist").click({force:true});
        // cy.get("shadow-signup-form").shadow().find("input[name='username']").should("exist").type("hello-world")
        cy.get("#title").type("hello-world")
        cy.get("#description").type("hello-world")
        cy.get("#btn-submit").should("exist").should("be.visible").click()
        cy.get("#submit-control").invoke("text").then((message)=>{
            expect(message).to.contains("Ajax Request is Processing!")
            cy.log(message)
        })
    })
})