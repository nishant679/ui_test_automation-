describe("Navbar Check", () => {
  it("navbar visual", () => {
    cy.visit("https://testlearnflixx.ventunotech.com/");

    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "Learnflixx Homepage",
      testName: "Navbar",
    });

    cy.eyesCheckWindow({
      tag: "page",
      target: "Navbar",
      fully: true,
    });

    // cy.get("#log-in").click();

    // Check the app page
    cy.eyesCheckWindow({
      tag: "App Window",
      target: "window",
      fully: true,
    });

    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });
});
