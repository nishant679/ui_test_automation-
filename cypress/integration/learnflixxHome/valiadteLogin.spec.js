/// <reference types="cypress" />

describe("login", () => {
  it("visite learnflixx homepage site", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");
  });

  it("Accept the privacy Policy", () => {
    cy.get(".btn").contains("Accept").click();
  });

  it("Find the login button and click it ", () => {
    cy.get(".btn").contains("Login").click();
    cy.wait(5000);
    cy.get("#inputEmail");
  });

  it("Email field should not be empty ", () => {
    // cy.get("#inputEmail").type("");
    cy.get(":nth-child(4) > .btn").click();
    // cy.contains("Please fill in this field.");
  });

  it("Enter credentials and login", () => {
    cy.get("#inputEmail").type("prabhu@ventunotech.com");
    cy.get("#inputPassword").type("12345678");
    cy.get(":nth-child(4) > .btn").click();
  });

  it("Get Invalid Credential message", () => {
    cy.get(".noty_body");
  });
});
