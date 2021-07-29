/// <reference types="cypress" />

const pizzaToppings = [
	"Pineapple",
	"Ham",
	"Pepperoni",
	"Jalapeno",
	"Green Peppers",
];

context("Pizza topping page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/pizza");
	});
	it("check our toppings", () => {
		cy.get(".toppings>li").each((item, index) => {
			cy.wrap(item).should("contain.text", pizzaToppings[index]);
		});
	});
});
