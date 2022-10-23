describe("Creating a message", () => {
  it("Displays the message in the list", () => {
    cy.visit("/");

    cy.get("[data-test='messageText']").type("New message");

    cy.get("[data-test='sendButton']").click();

    cy.get("[data-test='messageText']").should("have.value", "");

    cy.contains("New message");
  });
});

describe("Remove a message", () => {
  it("Remove the message from the list", () => {
    cy.visit("/");

    cy.get("[data-test='messageText']").type("message to remove");

    cy.get("[data-test='sendButton']").click();

    cy.get("[data-remove-message-in-list='message to remove']").click();

    cy.get("[data-message='message to remove']").should('not.exist');
  });
});
