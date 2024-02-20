describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("[href='https://www.lambdatest.com/selenium-playground/iframe-demo']").click()
        // cy.get("iframe#iFrame1").should("exist").then(($iframe)=>{
        //     const $body = $iframe.contents().find("body")
        //     cy.wrap($body).find(".rsw-ce").clear().type("hello world")
        // })
      const iframe =  cy.get("#iFrame1").its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap).find(".rsw-ce")
      iframe.clear().type("hello-world")
       
    })
})
