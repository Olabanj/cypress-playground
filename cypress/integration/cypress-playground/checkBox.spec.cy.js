describe("ShadowElement",()=>{
    beforeEach(()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/checkbox-demo']").click()
        
        })
   
it("checkbox",()=>{
        cy.get("#isAgeSelected").should("exist").check()
        cy.get('#txtAge').should("exist").and("be.visible").invoke("text").then((message)=>{
            expect(message).to.contain("Checked")
            cy.log(message)
       
       
    })
})
it("Disable checkbox",()=>{
    cy.get(':nth-child(2) > :nth-child(1) > .mr-10').should("be.enabled").check()
    cy.get(':nth-child(2) > :nth-child(3) > .mr-10').should("be.disabled")
   
   
})

it("Mutiple checkbox",()=>{
   cy.get("#ex1-check1").check()
   cy.get("#box").should("exist").and("be.visible").click()
   
   
})
})

