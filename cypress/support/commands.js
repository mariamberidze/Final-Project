Cypress.Commands.add("openRegistration", () => {
  // 2) ვაჭერთ ღილაკს "შესვლა"
  cy.get(".iprof").should("be.visible").click();
  // 3)იხსნება ავტორიზაციის პოპაპი, რომელზეც ვკითხულობთ: "არ გაქვთ გავლილი რეგისტრაცია ? გაიარეთ რეგისტრაცია"
  // ვაჭერთ ტექსტს "გაიარეთ რეგისტრაცია"
  cy.contains("გაიარეთ რეგისტრაცია").should("be.visible").click();
});

Cypress.Commands.add("authorization", (email, password) => {
  // 2)	ვაჭერთ ღილაკს "შესვლა"
  cy.get(".iprof").should("be.visible").click();
  // 3)	შეგვყავს მონაცემები
  cy.get(":nth-child(5) > .imail").type(email);
  cy.get(".ipass").type(password);
  // 4)	ვაჭერთ ღილაკს "ავტორიზაცია"
  cy.get(".avtorization > .input-shablon > .form-button").click();
});

Cypress.Commands.add("addToCart", () => {
  cy.get(".tutiyushi > .tLink").click();
  cy.contains("Versele-Laga NutriBird B18 3 kg").click();
  cy.get(".add-pro").click();
  cy.get(".icart").click();
  cy.contains("Versele-Laga NutriBird B18 3 kg").should("be.visible");
});
