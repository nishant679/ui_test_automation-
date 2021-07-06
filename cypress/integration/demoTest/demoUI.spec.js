/// <reference types="cypress" />

describe('login', ()=> {
    it('sign in', ()=> {
        cy.visit('https://testlearnflixx.ventunotech.com/');
        // cy.get('input[type="email"]').type('nkr.nishu@gmail.com');
        // cy.get('input[type="password"]').type('Summar@2019');
        // cy.get('.btn').contains('Login').click();
        cy.get('.search-box').type("some text");
    })
})