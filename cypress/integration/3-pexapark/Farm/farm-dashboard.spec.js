context('test farm dashboard component', () => {
    before(() => {
        cy.visit('http://localhost:4200/');
    });

    beforeEach(() => {
        cy.get('[data-cy="farm-dashboard"]').as('farm')
        cy.get('@farm').find('[data-cy="stats"]').as('stats')
    })

    context('[farm]/filters', () => {
        beforeEach(() => {
            cy.get('@stats').find('[data-cy="stats-filters"]').as('filters')
        })

        describe(
            'page display on medium desk screen',
            {
                viewportWidth: 1200,
            },
            () => {
                it('header with filters should exist', function () {
                    cy.get('@stats').find('header')
                        .should("exist")
                        .find('[data-cy="stats-filters"]')
                        .should("exist")
                });

                it('farm autocomplete should exist', function () {
                    cy.get('[data-cy="farm-select"]').should("exist");
                });

                it('while typing on the autocomplete input, a dropdown farm list should appear', function () {
                    cy.get('[data-cy="farm-select"]')
                        .find('input').clear().type('d')
                        .then(() => {
                            cy.get('.mat-autocomplete-panel').should('exist')
                        });
                });

                it('click on a new farm from dropdown, should change the card title', function () {
                    cy.get('[data-cy="farm-select"]')
                        .find('input').clear().type('d').then(() => {
                        cy.get('.mat-autocomplete-panel').find('mat-option').last().find('.mat-option-text').click()
                            .then($option => {
                                const farmTitle = $option.text();
                                cy.get('@stats').find('.card-title-farm-name')
                                    .should('contain.text', farmTitle)
                            })
                    })
                });
            }
        )

        describe(
            'page display on mobile screen',
            {
                viewportWidth: 420,
            },
            () => {
                xit('header with filters should exist', function () {
                    cy.get('@stats').find('header')
                        .should("exist")
                        .find('[data-cy="stats-filters"]')
                        .should("exist")
                });
            }
        )
    });
})

