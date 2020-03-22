/// <reference types="cypress"/>

context('Navigation', () => {
  before(() => {
    cy.fixture('navigation.json').as('navigation');
  });

  it('Home', function () {
    console.log(this.navigation.menu);
  });
});
