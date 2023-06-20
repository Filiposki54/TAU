/// <reference types="cypress" />

describe("click through project like it was a client", () =>{  
  it("Go through whole page", () =>{
    cy.visit("http://localhost:3000")

    cy.get('#navbar > :nth-child(1) > a').click();
    cy.url().should('include', '/events');

    cy.get('#toggle-filters').click();
    cy.get('#options').should("be.visible")

    cy.get('#options > :nth-child(2)').select("Location 3")
    cy.get('.chosen-tags').should('be.visible')

    cy.get('[for="booked"]').click();
    cy.get('#container > a').should('be.visible')

    cy.get('#container > a').click();
    cy.url().should('include', '/details');

    cy.get('[for="shift1"]').click();
    cy.get('#sign-in').click();

    cy.get('#back').click();
    cy.url().should('include', '/events');
  });
});