import data from "../fixtures/data.json";

describe("Registration", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  it("14. ავტორიზაცია ვალიდური მონაცემებით", () => {
    // 1)	შევდივართ საიტზე https://testzootopia.loremipsum.ge/ka
    // 2)	ვაჭერთ ღილაკს "შესვლა"
    // 3)	შეგვყავს მონაცემები
    // 4)	ვაჭერთ ღილაკს "ავტორიზაცია"
    cy.authorization(data.truedata["ელ.ფოსტა"], data.პაროლი);
    // 5)	საიტის ზედა მარჯვენა კუთხეში გამოჩნდა ღილაკები "ჩემი გვერდი" და "გასვლა"
    cy.get(".exit").should("be.visible");
    // ვაჭერთ ღილაკს "ჩემი გვერდი"
    cy.get(".srch-cart-prof > .iprof").should("be.visible").click();
    // იხსნება პერსონალური ინფორმაციის გვერდი მომხმარებლის მონაცემებით
    cy.get(":nth-child(1) > .redinput").should(
      "have.value",
      data["სახელი გვარი"]
    );
    cy.get(":nth-child(4) > .redinput").should(
      "have.value",
      data.truedata["პირადი ნომერი"]
    );
    cy.get(":nth-child(2) > .redinput").should("have.value", data.truedata.ტელ);
    cy.get(":nth-child(3) > .redinput").should(
      "have.value",
      data.truedata["ელ.ფოსტა"]
    );
  });

  it("15. ავტორიზაცია არავალიდური მონაცემებით", () => {
    // 1)	შევდივართ საიტზე https://testzootopia.loremipsum.ge/ka
    // 2)	ვაჭერთ ღილაკს "შესვლა"
    // 3)	შეგვყავს მონაცემები
    // 4)	ვაჭერთ ღილაკს "ავტორიზაცია"
    cy.authorization(data.truedata["ელ.ფოსტა"], data.falsedata.პაროლი);
    // ელ.ფოსტის ველი ინთება და მაუსის "!" აიქონთან მიტანისას გამოდის მესიჯი: "არასწორი ელ.ფოსტა ან პაროლი"
    cy.get(".input-div.alert > .imail").should("be.visible");
    cy.contains("არასწორი ელ.ფოსტა ან პაროლი").should("exist");
  });
});
