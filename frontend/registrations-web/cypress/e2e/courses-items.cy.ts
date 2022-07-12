describe('course list items', () => {
  beforeEach(() => {
    cy.intercept('/api/references/courses', {
      fixture: 'course-list-variations.json',
    }).as('courses');

    cy.intercept('api/references/offerings', {
      fixture: 'offerings-list-variations.json',
    }).as('offerings');

    cy.visit('/courses');
  });

  describe('The Common Stuff', () => {
    beforeEach(() => {
      cy.wait('@courses');
      cy.wait('@offerings');
    });

    it('Shows the Title', () => {
      cy.get(
        '[data-test-id="courses-list-item-0"] [data-test-id="courses-list-title"]'
      )
        .should('exist')
        .contains('Angular State Management');
    });
    it('Shows the Number Of Days', () => {
      cy.get(
        '[data-test-id="courses-list-item-0"] [data-test-id="courses-list-numberOfDays"]'
      )
        .should('exist')
        .contains('This is a 3-day class.');
    });
    it('Shows the Description', () => {
      cy.get('[data-test-id="courses-list-item-0"]')

        .get('[data-test-id="courses-list-description"]')
        .should('exist')
        .contains(
          'While a beginning-level Angular developer entering this training would have the basic skills to create simple Angular applications, when working in a team of developers, having consistent patterns for making data available to components, modeling interactions in a observable, traceable way, and dealing with API calls is imperative.'
        );
    });
  });

  describe('A Course With Offerings', () => {
    it('The See Offerings Button Is Shown', () => {
      cy.get('[data-test-id="courses-list-item-0"]')
        .find('.card-footer')
        .get('.btn')
        .should('exist');
    });
  });

  describe('A Course Without Offerings', () => {
    it('The Alert for No Offerings Should Be Shown', () => {
      cy.get('[data-test-id="courses-list-item-1"]')
        .find('.card-footer')
        .get('.alert')
        .should('exist');
    });
  });
});
