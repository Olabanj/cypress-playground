describe("Form",()=>{
    it("submit form",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/auto-healing']").should("exist").click({force:true});
        cy.get("#username").type("lukman")
        cy.get("#password").type("password")
        cy.get("form > .flex > .bg-black").click()
        cy.get(".text-green-100").invoke("text").then((message)=>{
            expect(message).to.contains("Login Successful")
            cy.log(message)
        })
    })
})