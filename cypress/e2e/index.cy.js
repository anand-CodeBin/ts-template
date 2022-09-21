/// <reference types="cypress" />

describe("Loading a page", () => {
  it("Loads a page", () => {
    cy.visit("https://www.google.com/");
  });
});
