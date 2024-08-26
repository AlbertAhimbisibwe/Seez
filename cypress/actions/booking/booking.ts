import selectors from "../selectors";

export const checkVehicle = () =>

    cy.get(selectors.bookCar.firstCar)
  .shadow()
  .find(selectors.bookCar.carImage)
  .click()

  .get(selectors.bookCar.loanListingDetails)
  .shadow()
  .find(selectors.bookCar.loanDurationMenu)
  .scrollIntoView()
  .wait(3000)

