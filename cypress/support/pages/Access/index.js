class Access {
    acessarPagina() {
        cy.visit('/register?returnUrl=%2F');
    }

    verificarAcesso() {
        cy.url().should('be.equal', `${Cypress.config("baseUrl")}/register?returnUrl=%2F`);
    }
}
export default new Access();