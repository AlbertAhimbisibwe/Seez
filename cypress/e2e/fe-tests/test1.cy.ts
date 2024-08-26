import { checkVehicle } from "cypress/actions/booking/booking"

describe('Check a car loan successfully', () => {
  it('passes', () => {
    cy.visit('/')
    checkVehicle()
  })
})