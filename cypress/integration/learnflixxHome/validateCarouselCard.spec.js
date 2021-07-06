describe("Footer", () => {
  it("visit learnflix site", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");
  });
  it("Accept the privacy Policy", () => {
    cy.get(".btn").contains("Accept").click();
  });

  it("Get carousel card component", () => {
    cy.get(".active > .v-card > .overlay");
  });

  it("Click Action Button ", () => {
    // cy.get(".action-button-item .active").click();
    cy.get(
      ".active > .v-card > .overlay > .action-button-item > a > .btn"
    ).click();
  });
});
