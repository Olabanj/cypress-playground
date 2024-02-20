describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo']").click()
        cy.get("#from").type("04/03/2005{enter}")
       // cy.get("tbody tr:nth-of-type(3) td:nth-of-type(4)").click()
        cy.get("#to").type("05/06/2007{enter}")
       // cy.get("tbody tr:nth-child(2) td:nth-child(4").click()
      
       
    })
})