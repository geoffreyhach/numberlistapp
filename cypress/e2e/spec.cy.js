describe("number list app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("should be able to write number in the input field", () => {
        cy.get('[data-cy="input"]').click().type("111");

        cy.get("input").invoke("val").should("equal", "111");
    });

    it("shouldn't be able to write text in the input field", () => {
        cy.get('[data-cy="input"]').click().type("abc");

        cy.get("input").invoke("val").should("equal", "");
    });

    it("should display an error when user type something that isn't a number", () => {
        cy.get('[data-cy="input"]').click().type("abc");

        cy.get("body").should("contain", "must be a number");
    });

    // it("should be able to delete a value", () => {
    //     cy.get('[data-cy="numberitem"]')
    //         .first()
    //         .click()
    //         .then((number) => {
    //             const value = number.text();
    //             cy.get('[data-cy="delete-btn"]').click();
    //             cy.get("body").should("not.contain", value);
    //         });
    // });

    // it("should add number to the list when submited", () => {
    //     cy.get('[data-cy="input"]').click().type("111");

    //     cy.get('[data-cy="submit-btn"]').click();
    //     cy.get("body").should("contain", "111");
    // });
});
