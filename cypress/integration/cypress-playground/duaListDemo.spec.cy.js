import 'cypress-real-events/support'
describe("ShadowElement",()=>{
    it("should be created",()=>{
        cy.visit('/',{failOnStatusCode: false})
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/bootstrap-dual-list-box-demo']").click({force:true});
        cy.get('div.well.text-right div#listhead:nth-of-type(1)').type("da")
        cy.get(".list-group-item.active").click()
        cy.get('.move-right').click()
       
    })
})