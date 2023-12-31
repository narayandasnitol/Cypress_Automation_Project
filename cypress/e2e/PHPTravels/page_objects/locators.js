import url from "../../../support/environment";

class Locators {
  constructor() {
    this.homepage = new NavigateHomepage();
    this.hotelSearch = new HotelSearch();
    this.hotelBooking = new HotelBooking();
    this.userAuthentication = new UserAuthentication();
    this.timeOutHandle = new TimeOutHandle();
  }
}
class NavigateHomepage {
  get visitHomePage() {
    return cy.visit(url.baseURL);
  }
  get verifyHomePageVisibility() {
    return cy.get("h4.text-white").should("be.visible");
  }
  get verifyHomePage() {
    return cy
      .get("h4.text-white")
      .should("have.text", "Your Trip Starts Here!");
  }
}
class HotelSearch {
  get visitHotelModule() {
    return cy.contains("a", "Hotels");
  }
  get verifyHotelModule() {
    return cy.contains("strong", "Search for best hotels").should("be.visible");
  }
  get searchHotelName() {
    return cy.get("#select2-hotels_city-container");
  }
  get verifySearchHotelName() {
    return cy
      .get("#select2-hotels_city-results li:nth-child(1)")
      .should("be.visible");
  }
  get selectHotel() {
    return cy.get("#select2-hotels_city-results li:nth-child(1)");
  }
  get clearCheckInDate() {
    return cy.get("#checkin");
  }
  get addCheckInDate() {
    return cy.get("#checkin");
  }
  get selectCheckInDate() {
    return cy.get("#checkin");
  }
  get clearCheckOutDate() {
    return cy.get("#checkout");
  }
  get addCheckOutDate() {
    return cy.get("#checkout");
  }
  get selectCheckOutDate() {
    return cy.get("#checkout");
  }
  get clickSearchBtn() {
    return cy.get("button.search_button");
  }
  get verifySearchHotelData() {
    return cy
      .get(":nth-child(1) > .card > .card-body > .fadeout")
      .should("be.visible");
  }
}
class HotelBooking {
  get selectAHotel() {
    return cy.get(":nth-child(1) > .card > .card-body > .fadeout");
  }
  get selectARoom() {
    return cy.get('button[type="submit"]:first').scrollIntoView();
  }
  get verifyBookingInformationModule() {
    return cy
      .contains("h3.title", "Personal Information")
      .scrollIntoView()
      .should("be.visible");
  }
  get bookingAddFirstName() {
    return cy.get('input[name="user[first_name]"]').should("be.visible");;
  }
  get bookingAddLastName() {
    return cy.get('input[name="user[last_name]"]');
  }
  get bookingAddEmail() {
    return cy.get('input[name="user[email]"]');
  }
  get bookingAddPhone() {
    return cy.get('input[name="user[phone]"]');
  }
  get bookingAddAddress() {
    return cy.get('input[name="user[address]"]');
  }
  get verifyTravellerInformationModule() {
    return cy
      .get('h3.title:contains("Travellers Information")')
      .scrollIntoView()
      .should("be.visible");
  }
  get traveller1AddFirstName() {
    return cy.get('input[name="firstname_1"]');
  }
  get traveller1AddLastName() {
    return cy.get('input[name="lastname_1"]');
  }
  get traveller2AddFirstName() {
    return cy.get('input[name="firstname_2"]');
  }
  get traveller2AddLastName() {
    return cy.get('input[name="lastname_2"]');
  }
  get selectPaymentGateway() {
    return cy.get("#gateway_pay_later");
  }
  get selectAgreeBtn() {
    return cy.get("#agreechb");
  }
  get selectConfirmBookingBtn() {
    return cy.get("#booking");
  }
  get verifyBookingSuccessModule() {
    return cy.get(".text-success").should("be.visible");
  }
}
class UserAuthentication {
  get selectUserModule() {
    return cy.get(".bg-light > .m-0");
  }
  get selectLoginBtn() {
    return cy.get('.dropdown-menu .dropdown-item:contains("Login")');
  }
  get loginAddUsername() {
    return cy.get("#email");
  }
  get loginAddPassword() {
    return cy.get("#password");
  }
  get selectSubmitBtn() {
    return cy.get("#submitBTN > span");
  }
  get verifyLoginSuccessModule() {
    return cy.get(".author__meta").should("contain", "Welcome Back");
  }
}
class TimeOutHandle {
  get visitHomePage() {
    cy.visit(url.baseURL);
  }
  get verifyHomePageVisibility() {
    return cy
      .get("h4.text-white", { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "Your Trip Starts Here!");
  }
  get visitHotelModule() {
    return cy.contains("a", "Hotels");
  }
  get verifyHotelModule() {
    return cy.contains("strong", "Search for best hotels").should("be.visible");
  }
  get verifyTimeoutGracefully() {
    return cy
      .get(".nonexistent-element", { timeout: 5000 })
      .should("not.exist")
      .then(() => {
        cy.log("Element did not appear within the specified timeout.");
      });
  }
}
export default new Locators();
