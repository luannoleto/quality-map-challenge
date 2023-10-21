import { faker } from "@faker-js/faker";

const el = require('./elements').ELEMENTS;

class Registro {

    preencherFormulario() {
        cy.get(el.gender).check();
        cy.get(el.firstname).type(Cypress.env('first_name'), { delay: 0 })
        cy.get(el.lastname).type(Cypress.env('last_name'), { delay: 0 })
        cy.get(el.day).select('6')
        cy.get(el.month).select('8')
        cy.get(el.year).select('1994')
        cy.get(el.email).type(`${faker.random.words(2)}@cypress.com`, { delay: 0 });
        cy.get(el.company).type(Cypress.env('company'), { delay: 0 })
        cy.get(el.password).type(Cypress.env('user_password'), { delay: 0 })
        cy.get(el.confirmpassword).type(Cypress.env('confirm_user_password'), { delay: 0 })
    }

    preencherEmailInvalido() {
        cy.get(el.firstname).type(Cypress.env('first_name'), { delay: 0 })
        cy.get(el.lastname).type(Cypress.env('last_name'), { delay: 0 })
        cy.get(el.email).type(Cypress.env('email'), { delay: 0 });
        cy.get(el.password).type(Cypress.env('user_password'), { delay: 0 })
        cy.get(el.confirmpassword).type(Cypress.env('confirm_user_password'), { delay: 0 })
    }

    preencherSenhasDiferentes() {
        cy.get(el.firstname).type(Cypress.env('first_name'), { delay: 0 })
        cy.get(el.lastname).type(Cypress.env('last_name'), { delay: 0 })
        cy.get(el.email).type(`${faker.random.words(2)}@cypress.com`, { delay: 0 });
        cy.get(el.password).type(Cypress.env('user_password'), { delay: 0 })
        cy.get(el.confirmpassword).type('123456789561', { delay: 0 })
    }

    preencherSenhaPequena() {
        cy.get(el.firstname).type(Cypress.env('first_name'), { delay: 0 })
        cy.get(el.lastname).type(Cypress.env('last_name'), { delay: 0 })
        cy.get(el.email).type(`${faker.random.words(2)}@cypress.com`, { delay: 0 });
        cy.get(el.password).type('12345', { delay: 0 })
    }

    buttonSubmit() {
        cy.get(el.submit).click();
    }

    validarMensagemDeSucesso(message) {
        cy.get(el.msgsuccess).should("contain", message);
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/registerresult/1?returnUrl=/`)
    }

    validarMensagemDeErroFillRequired(message) {
        cy.get(el.msgerror).should('contain', message);
    }

    validarMensagemEmailJaCadastrado(message) {
        cy.get(el.msgerroremail).should('contain', message);
    }

    validarMensagemPasswordPequena(message) {
        cy.get(el.msgerror).should('contain', message);
    }

    validarMensagemPasswordDiferentes(message) {
        cy.get(el.msgerror).should('contain', message);
    }
}

export default new Registro();
