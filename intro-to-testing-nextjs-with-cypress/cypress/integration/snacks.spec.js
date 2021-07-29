/// <reference types="cypress" />
const snacks = ["Chips", "Popcorn", "M&Ms", "Rice Cakes", "Jerky"];

context("Snacks page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/snacks");
	});

	it("should contain correct snacks", () => {
		cy.get(".snacks>li").each((item, index) => {
			cy.wrap(item).should("contain.text", snacks[index]);
		});
	});
});
