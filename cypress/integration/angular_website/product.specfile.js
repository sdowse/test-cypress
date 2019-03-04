context('Product Tests (CRUD)' , () => {


beforeEach(() => {

    cy.visit('');

})

it("Create a Product", () => {

    cy.get('.mat-flat-button, .mat-primary').click();

    cy.url().should('include','/product-add');

    cy.get('#mat-input-0').type("carrots");

    cy.get('#mat-input-1').type("orange vegetable");

    cy.get('#mat-input-2').type("10");

    cy.get('[type="submit"]').click();

    cy.get('h2').should('contain','carrots');
    
    })

})