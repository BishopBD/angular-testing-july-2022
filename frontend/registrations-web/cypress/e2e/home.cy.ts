describe('The Home Page', () => {
  describe('the banner', () => {
    it('shows the banner thing', () => {
      cy.visit('/');
      cy.get('[data-testid="banner"]')
        .find('.title')
        .should('exist')
        .contains('Hypertheory Training');
    });

    it('shows the login button', () => {
      // it shows the thing.
      // it says login! on it
      cy.get('[data-test="login-indicator-logged-out"]').should('exist');
      cy.get('[data-test="login-indicator-logged-in"]').should('not.exist');
      // cy.get('[data-testid="banner"]').find('button').should('exist');
    });
  });

  describe('the content portion', () => {
    it('does this work');
  });
});
