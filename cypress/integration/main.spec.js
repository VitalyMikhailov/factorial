import MainPage from "../support/pages/main.page";

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("Test Factorial Calculator", () => {
  context("Elements Testing", () => {
    before(() => {
      cy.visit("/");
    });

    it("Elements test", () => {
      MainPage.Title().should(
        "have.text",
        "The greatest factorial calculator!"
      );
      MainPage.Arrow().should("be.visible");
      MainPage.Input().should("have.attr", "placeholder", "Enter an integer");
      MainPage.CalculateButton()
        .should("be.visible")
        .and("have.text", "Calculate!");
      MainPage.TermsAndConditionsLink()
        .should("have.text", "Terms and Conditions")
        .and("be.visible");
      MainPage.PrivacyLink().should("have.text", "Privacy").and("be.visible");
      MainPage.Qxf2ServiceLink()
        .should("have.text", "Qxf2 Services")
        .and("be.visible");
    });
  });

  context("Positive Testing", () => {
    before(() => {
      cy.visit("/");
    });
    it("should return correct value if input is number", () => {
      let num = random(0, 40);
      MainPage.Input().type(num);
      MainPage.CalculateButton().click();
      MainPage.ResultField().should("contain", factorial(num));
    });
  });

  context("Negative Testing", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should return an error for empty input", () => {
      MainPage.CalculateButton().click();
      MainPage.ResultField().should("have.text", "Please enter an integer");
    });

    it("should return an error for letters input", () => {
      MainPage.Input().type("abc");
      MainPage.CalculateButton().click();
      MainPage.ResultField().should("have.text", "Please enter an integer");
    });

    it("should return an error for symbols input", () => {
      MainPage.Input().type("+");
      MainPage.CalculateButton().click();
      MainPage.ResultField().should("have.text", "Please enter an integer");
    });
  });

  context("Redirect Testing", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Click Terms and Conditions", () => {
      MainPage.TermsAndConditionsLink().click();
      cy.url().should("eq", "http://qainterview.pythonanywhere.com/privacy");
    });

    it("Click Privacy", () => {
      MainPage.PrivacyLink().click();
      cy.url().should("eq", "http://qainterview.pythonanywhere.com/terms");
    });
  });
});
