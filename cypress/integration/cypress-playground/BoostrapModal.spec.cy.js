describe("Modal",()=>{
    beforeEach(()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo']").should("exist").click({force:true});

    })
    it("Single Modal",()=>{
        cy.get("button[data-target='#myModal']").should("exist").and("be.visible").click()
        cy.get("div[id='myModal'] p").invoke("text").then((message)=>{
            expect(message).to.contain("This is the place where the content for the modal dialog displays")
        cy.get("div[id='myModal'] div[class='modal-footer'] button:nth-child(1)").should("exist").click()
        })
    })
        it("Multiple Modal",()=>{
            cy.get("button[data-target='#myMultiModal']").should("exist").and("be.visible").click()
            cy.get("div[id='myMultiModal'] p:nth-child(1)").invoke("text").then((message)=>{
                expect(message).to.contain("This is the place where the content for the modal dialog displays.")
            })
            cy.get("button[data-target").should("exist").click({force:true})
            cy.get("div[id='mySecondModal'] p").invoke("text").then((message)=>{
                expect(message).to.contain("This is the place where the content for the modal dialog displays.")
            })
            cy.get("div[id='mySecondModal'] div[class='modal-footer'] button:nth-child(1)").should("exist").click()
           
            // cy.get("button[data-target='#myModal']").should("exist").and("be.visible").click()
            // cy.get("div[id='myModal'] p").invoke("text").then((message)=>{
            //     expect(message).to.contain("This is the place where the content for the modal dialog displays")
            // cy.get("div[id='myModal'] div[class='modal-footer'] button:nth-child(1)").should("exist").click()
            // })
    })
})