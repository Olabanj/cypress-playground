describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo']").click()
        cy.get("#textbox").type("lukman.txt")
        cy.get("#create").should("exist").and("be.visible").click()
        cy.get("#link-to-download").should("exist").click()


       
      
       
    })
})