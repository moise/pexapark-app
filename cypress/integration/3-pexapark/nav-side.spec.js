describe('test navigation sidebar', () => {
    before(() => {
        cy.visit('http://localhost:4200/');
    })

    it('a side navigation drawer should exist', function () {
        cy.get('[data-cy="side-nav-drawer"]').should('exist');
    });

    it('a side navigation drawer should contain the logo', function () {
        cy.get('[data-cy="side-nav-drawer"]').find('header a img.logo').should('exist');
    });

    it('a side navigation bar should exist', function () {
        cy.get('[data-cy="side-app-nav"]').should('exist');
    });

    it('a side navigation bar should have a user menu', function () {
        cy.get('[data-cy="side-user-nav"]').should('exist');
    });

    it('the click on the user avatar should open a submenu', function () {
        cy.get('[data-cy="side-user-nav"]').find('button.avatar').click()
            .then(() => {
                cy.get('div.mat-menu-content').contains('Account').should("exist")
                cy.get('body').click();
            });
    });
})