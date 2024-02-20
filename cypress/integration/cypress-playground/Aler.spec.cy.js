describe("Alert",()=>{
    beforeEach(()=> {
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo']").should("exist").click({force:true});
    })
    it("javascript Alert",()=>{
        cy.get("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").should("exist").click()
        cy.on("window:alert",(text)=>{
            expect(text).to.equal("I am an alert box!")
             return true
        })
        
        
        })
        it("Confirm Box",()=>{
        cy.get("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").should("exist").click()
        cy.on("window:alert",(text)=>{
            expect(text).to.equal("Press a button!")
            return true

        })
        cy.get("#confirm-demo").invoke("text").then((message)=>{
            expect(message).to.contain("You pressed OK!")
        })
   
           

    })
    it("Alert Cancel Confirm Box",()=>{
        cy.get("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").should("exist").click()
        cy.on("window:alert",(text)=>{
            expect(text).to.equal("Press a button!")
            return false

        })
        cy.get("#confirm-demo").invoke("text").then((message)=>{
            expect(message).to.contain("You pressed Cancel!").should("exist")
        })
    })
})