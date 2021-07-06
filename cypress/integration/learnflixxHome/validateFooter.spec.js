describe("Footer", () => {
  it("visit learnflix site", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");
  });

  it("Accept the privacy Policy", () => {
    cy.get(".btn").contains("Accept").click();
  });

  it("get footer links", () => {
    cy.get(".site-footer").contains("FAQs");
    cy.get(".site-footer").contains("Nutzungsbedingungen");
    cy.get(".site-footer").contains("Rückerstattungen & Abo kündigen");
  });

  it("Check if link contains href", () => {
    cy.get(".site-footer")
      .contains("FAQs")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get(".site-footer")
      .contains("Nutzungsbedingungen")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get(".site-footer")
      .contains("Rückerstattungen & Abo kündigen")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get(".site-footer")
      .contains("Rückerstattungen & Abo kündigen")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get(".site-footer")
      .contains("Kontakt")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });

    cy.get(".site-footer")
      .contains("Datenschutz-Bestimmungen")
      .should("have.attr", "href")
      .then((href) => {
        // cy.visit(href);
        cy.visit("https://testlearnflixx.ventunotech.com/").then((win) => {
          win.location.href = href;
        });
      });
  });
});
