/// <reference types="cypress" />

describe("filter events", () =>{  
  it("click some filters", () =>{
    cy.visit("http://localhost:3000/events")

    cy.get('#toggle-filters').click()

    cy.get('#options > :nth-child(2)').select("Location 1")
    cy.get('.chosen-tags').should('have.text', 'Location 1 ')
    cy.get('#container > :nth-child(2)').should('be.visible')
    cy.get('#container > :nth-child(3)').should('be.visible')
    cy.get('#container > :nth-child(4)').should('be.visible')

    cy.get('.checkbox-container > :nth-child(1)').click()
    cy.get('#container > :nth-child(2)').should('be.visible')

    cy.get('.chosen-tags > .icon').click();
    cy.get('#container > :nth-child(2)').should('be.visible')
    cy.get('#container > :nth-child(3)').should('be.visible')
    cy.get('#container > :nth-child(4)').should('be.visible')
    
    cy.get('.checkbox-container > :nth-child(1)').click()
    cy.get('#container > :nth-child(2)').should('be.visible')
    cy.get('#container > :nth-child(3)').should('be.visible')
    cy.get('#container > :nth-child(4)').should('be.visible')
    cy.get('#container > :nth-child(5)').should('be.visible')
    cy.get('#container > :nth-child(6)').should('be.visible')
    cy.get('#container > :nth-child(7)').should('be.visible')
    cy.get('#container > :nth-child(8)').should('be.visible')

    cy.get('#toggle-filters').click()
  });
});