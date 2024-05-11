import data from "../fixtures/data.json";

describe("Registration", () => {
  beforeEach(() => {
    cy.viewport(1200, 730);
    cy.visit("https://testzootopia.loremipsum.ge/ka");
  });
  it("17. პროდუქტის კალათაში დამატება პროდუქტის შიდა გვერდიდან (რაოდ.>0)", () => {
    cy.authorization(data.truedata["ელ.ფოსტა"], data.პაროლი);
    // 1) მთავარი/კატეგორიის/ქვეკატეგორიის/ძებნის გვერდიდან ვირჩევთ და ვაჭერთ პროდუქტს
    cy.get(".tutiyushi > .tLink").click();
    cy.contains("Versele-Laga NutriBird B18 3 kg").click();
    // 2)	ვირჩევთ რაოდენობას
    // 3)	ვაჭერთ ღილაკს "კალათაში დამატება"
    cy.get(".add-pro").click();
    // • წარწერა "კალათაში დამატება" შეიცვალა "დამატებულია"-თი
    cy.get(".add-pro").should("contain", "დამატებულია");
    // • კალათის აიქონზე რაოდენობა გაიზარდა
    cy.get(".icart > #cart-items-count").should("contain", 1);
    // 4)	გადავდივართ კალათის გვერდზე
    cy.get(".icart").click();
    // • არჩეული პროდუქტი არჩეული რაოდენობითაა კალათაში
    cy.contains("Versele-Laga NutriBird B18 3 kg").should("be.visible");
  });

  it("20. პროდუქტის კალათიდან წაშლა (კალათის გვერდიდან)", () => {
    cy.authorization(data.truedata["ელ.ფოსტა"], data.პაროლი);
    cy.addToCart();
    // 1)	ვხსნით კალათის გვერდს
    cy.get(".icart").click();
    // 2)	ვირჩევთ პროდუქტს და ვაჭერთ სანაგვის აიქონს პროდუქტის ჩარჩოში
    cy.get(".clear").click();
    // • პროდუქტი წაიშალა კალათიდან
    cy.get(".empty > p").should("be.visible");
  });
});
