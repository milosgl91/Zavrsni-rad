/// <reference types ="Cypress" />
describe ("Login page", ()=>{
    before (() =>{
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });
    beforeEach(() => {
        cy.visit ('https://cypress.vivifyscrum-stage.com/login');
    });
    it ("Positive case - Successful login", () =>{
        cy.get("input[type='email']").type("milos.gl.91@gmail.com");
        cy.get("input[type='password']").type("Milos031191");
        cy.get("button[type='submit']").click();
        cy.url().should('contains', '/my-organizations');
        cy.get(('button[type="submit"]')).should('not.exist');
    });
    it ("Negative case - Unseccesful login" , () =>{
        cy.visit ('https://cypress.vivifyscrum-stage.com/login');
         cy.get("input[type='email']").type("milos.gl91@gmail.com");
         cy.get("input[type='password']").type("Milos031191");
         cy.get("button[type='submit']").click();

         cy.url().should('contains', 'https://cypress.vivifyscrum-stage.com/login');
         cy.get(('button[type="submit"]')).should('be.visible');
         cy.get('span[class="vs-c-user-name"]').should('not.exist');
         cy.get('span[class="el-form-item__error"]').should('be.visible');
    });
})