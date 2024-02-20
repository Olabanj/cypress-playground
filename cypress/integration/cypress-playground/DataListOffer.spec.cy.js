describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/data-list-filter-demo']").click({force:true})
        cy.get("[id='input-search']").type("oak")
        cy.get("div[class='searchable-container grid grid-cols-1 sm:grid-cols-2 mb-30 gap-20 mt-20'] div:nth-child(1) div:nth-child(1)").invoke("text")
        .then((message)=>{
            expect(message).to.contain("Company Name: Oakes Ltd Name: Jonathan Oakes Title: Founder")
        })
      
       
    })
})