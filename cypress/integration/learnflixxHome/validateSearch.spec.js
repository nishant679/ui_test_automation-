describe("Footer", () => {
  it("visit learnflix site", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");
  });

  it("Accept the privacy Policy", () => {
    cy.get(".btn").contains("Accept").click();
  });

  it("Search with empty text", () => {
    cy.get(".btn > .vt").click();
    cy.get(".noty_body").contains("Search is empty");
  });

  it("Search with key", () => {
    cy.get(".search-box").focus().type("masterclass").type("{enter}");
    // cy.get(".btn > .vt").;
  });
});
