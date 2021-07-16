class MainPage {
  Title() {
    return cy.get("h1");
  }

  Arrow() {
    return cy.get(".icon-arrow-right");
  }

  Input() {
    return cy.get("input");
  }

  CalculateButton() {
    return cy.get('[id="getFactorial"]');
  }

  ResultField() {
    return cy.get("#resultDiv");
  }

  TermsAndConditionsLink() {
    return cy.get('a[href="/privacy"]');
  }

  PrivacyLink() {
    return cy.contains("Privacy");
  }

  Qxf2ServiceLink() {
    return cy.contains("Qxf2 Services");
  }
}

export default new MainPage();
