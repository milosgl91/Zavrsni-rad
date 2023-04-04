/// <reference types = "Cypress" />
const credentials = require('../fixtures/data.json');
const { loginPage } = require('../page_objects/LoginPOM');

describe('Create new board', () => {
    it.only('Successful add new board', () => {
        cy.visit('/login');
        loginPage.login('milos.gl.91@gmail.com', 'Milos031191');
        cy.wait(2000);
        cy.visit('organizations/27318/boards');
        loginPage.xButton.click();
        loginPage.addNewBoard.click();
    })
})