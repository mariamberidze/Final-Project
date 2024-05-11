import data from "../fixtures/data.json";

describe("Registration", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  it("3. რეგისტრაცია - ვეთანხმები წესებსა და პირობებს არაა მონიშნული", () => {
    // 1) შევდივართ საიტზე https://testzootopia.loremipsum.ge/ka
    // 2) ვაჭერთ ღილაკს "შესვლა"
    // 3)ვაჭერთ ტექსტს "გაიარეთ რეგისტრაცია"
    cy.openRegistration();
    // 4)შეგვყავს მონაცემები
    cy.get(":nth-child(1) > .ismile").type(data["სახელი გვარი"]);
    cy.get(":nth-child(2) > .imail").type(data.falsedata["ელ.ფოსტა"]);
    cy.get(".ipir").type(data.falsedata["პირადი ნომერი"]);
    cy.get(":nth-child(4) > .itel").type(data.falsedata.ტელ);
    cy.get(":nth-child(5) > .ipass").type(data.პაროლი);
    cy.get(".reg-form-left > :nth-child(6) > .ipass").type(data.პაროლი);
    // 5)ვაჭერთ ღილაკს "რეგისტრაცია"
    cy.get(".regsub").click();
    // "ვეთანხმები წესებსა და პირობებს" მოსანიშნი აიქონი წითლდება
    cy.get("#Path_10302").should("have.css", "fill", "rgb(255, 0, 0)");
  });

  it("11. რეგისტრაცია მოკლე პაროლით (<6)", () => {
    // 1)	შევდივართ საიტზე https://testzootopia.loremipsum.ge/ka
    // 2)	ვაჭერთ ღილაკს "შესვლა"
    // 3)	ვაჭერთ ტექსტს "გაიარეთ რეგისტრაცია"
    cy.openRegistration();
    // 4)	შეგვყავს მონაცემები და ვნიშნავთ ველს "ვეთანხმები წესებსა და პირობებს"
    cy.get(":nth-child(1) > .ismile").type(data["სახელი გვარი"]);
    cy.get(":nth-child(2) > .imail").type(data.falsedata["ელ.ფოსტა"]);
    cy.get(".ipir").type(data.falsedata["პირადი ნომერი"]);
    cy.get(":nth-child(4) > .itel").type(data.falsedata.ტელ);
    cy.get(":nth-child(5) > .ipass").type(data["პაროლი მოკლე"]);
    cy.get(".reg-form-left > :nth-child(6) > .ipass").type(
      data["პაროლი მოკლე"]
    );
    cy.get("#etx").check({ force: true });
    // 5)	ვაჭერთ ღილაკს "რეგისტრაცია"
    cy.get(".regsub").click();
    // პაროლის ველი ინთება და მაუსის "!" აიქონთან მიტანისას გამოდის მესიჯი: "უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს"
    cy.get(".input-div.alert > .ipass").should("be.visible");
    cy.contains("უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს.").should("exist");
  });

  it("13. რეგისტაცია არსებული მომხმარებლის მონაცემებით", () => {
    // 1)	შევდივართ საიტზე https://testzootopia.loremipsum.ge/ka
    // 2)	ვაჭერთ ღილაკს "შესვლა"
    // 3)	ვაჭერთ ტექსტს "გაიარეთ რეგისტრაცია"
    cy.openRegistration();
    // 4)	შეგვყავს მონაცემები და ვნიშნავთ ველს "ვეთანხმები წესებსა და პირობებს"
    cy.get(":nth-child(1) > .ismile").type(data["სახელი გვარი"]);
    cy.get(":nth-child(2) > .imail").type(data.truedata["ელ.ფოსტა"]);
    cy.get(".ipir").type(data.truedata["პირადი ნომერი"]);
    cy.get(":nth-child(4) > .itel").type(data.truedata.ტელ);
    cy.get(":nth-child(5) > .ipass").type(data.პაროლი);
    cy.get(".reg-form-left > :nth-child(6) > .ipass").type(data.პაროლი);
    cy.get("#etx").check({ force: true });
    // 5)	ვაჭერთ ღილაკს "რეგისტრაცია"
    cy.get(".regsub").click();
    // ინთება ელ.ფოსტის ველი და მაუსის "!" აიქონთან მიტანისას გამოდის მესიჯი: "ასეთი ჩანაწერი უკვე არსებობს"
    cy.get(".input-div.alert > .imail").should("be.visible");
    cy.contains("ასეთი ჩანაწერი უკვე არსებობს.").should("exist");
  });
});
