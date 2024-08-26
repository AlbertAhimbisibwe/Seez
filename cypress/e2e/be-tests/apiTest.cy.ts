import { route } from "cypress/services/consumer";

describe("API service test", () => {
    it("Runs the first API Test", () => {
        cy.request({ method: "get", url: `${route.firstPage}`})
        .then((response: any) => cy.wrap(response).its("status").should("be.equal", 200));
    });   
});