describe('Drag and Drop', () => {
    it('should drag and drop element', () => {
        cy.visit('/',{failOnStatusCode: false}); // Replace with your application URL
        cy.get("a[href='https://www.lambdatest.com/selenium-playground/drag-and-drop-demo']").click()
        
        // Select the draggable element and the drop target element
        cy.get('#todrag > span:nth-of-type(2)').dragTo('#mydropzone');
        
        // Add assertions to verify the result of the drag and drop action
        // For example, you can check if the drop target has received the dragged element
        //cy.get('.drop-target').should('contain', 'Dragged Element');
    });
});
