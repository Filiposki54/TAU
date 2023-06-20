/// <reference types="cypress" />

describe("click through navigation bar", () =>{  
  it("can locate the navigation bar", () =>{

    cy.visit("http://localhost:3000/");

    cy.get("#langauges-select").select("Polish");
    cy.get('#navbar > :nth-child(1) > a').should('have.text', 'Wszystkie wydarzenia')

    cy.get("#langauges-select").select("Russian");
    cy.get('#navbar > :nth-child(1) > a').should('have.text', 'Все события')

    cy.get("#langauges-select").select("English");
    cy.get('#navbar > :nth-child(1) > a').should('have.text', 'All Events')

    cy.get("#langauges-select").select("Ukrainian");
    cy.get('#navbar > :nth-child(1) > a').should('have.text', 'Усі події')

    cy.get('#navbar > :nth-child(1) > a').click();
    cy.url().should('include', '/events');

    cy.get('#navbar > :nth-child(2) > a').click();
    cy.url().should('include', '/calendar');

    cy.get('#navbar > :nth-child(3) > a').click();
    cy.url().should('include', '/volunteers');

    cy.get('#navbar > :nth-child(4) > a').click();
    cy.url().should('include', '/needyou');

    cy.get('#navbar > :nth-child(6) > a').click();
    cy.url().should('include', '/login');

    cy.get('img').click();
    cy.url().should('include', '/');
  });
});