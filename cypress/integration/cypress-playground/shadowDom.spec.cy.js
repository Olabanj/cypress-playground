describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("[href='https://www.lambdatest.com/selenium-playground/shadow-dom']").click()
        cy.get("shadow-signup-form").shadow().find("input[name='username']").should("exist").type("hello-world")
    })
})

