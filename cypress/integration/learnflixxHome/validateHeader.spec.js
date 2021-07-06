describe("Footer", () => {
  it("visit learnflix site", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");
  });

  it("Accept the privacy Policy", () => {
    cy.get(".btn").contains("Accept").click();
  });

  it("get navbar contents ", () => {
    cy.get("#navbarSupportedContent");
  });

  it("Check Hover effect is working", () => {
    cy.get("#navbarSupportedContent")
      .contains("Startseite")
      .trigger("mouseover");

    cy.get("#navbarSupportedContent")
      .contains("Kategorien")
      .trigger("mouseover");
    //   .dblclick();
  });

  it("Validate all Nav Links are working", () => {
    cy.get("#navbarSupportedContent")
      .contains("Startseite")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get("#navbarSupportedContent")
      .contains("Kategorien")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get("#navbarSupportedContent")
      .contains("Master-Class")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get("#navbarSupportedContent")
      .contains("Startseite")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });
  });
});
