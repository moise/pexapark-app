describe('test header', () => {
    before(() => {
        Cypress.config('viewportWidth', 1200)
        cy.visit('http://localhost:4200/');
    });

    beforeEach(() => {
        cy.get('[data-cy="global-header"]').as('header')
    })

    it('a header toolbar should exist', function () {
        cy.get('@header').should('exist');
    });

    it('a page title with dashboard text should exist', function () {
        cy.get('@header').within(() => {
            cy.get('[data-cy="first-row"]').find('.page-title')
                .should('exist')
                .should('contain.text', 'Dashboard')
        })
    });
})