import HomePage from "./specs/navigateHomepage.spec";
import HotelSearch from "./specs/hotelSearch.spec";
import HotelBooking from "./specs/hotelBooking.spec";
import UserAuthentication from "./specs/userAuthentication.spec";
import TimeoutHandle from "./specs/timeoutHandling.spec";

describe("Automating Booking Process on PHPTravels", () => {
  it("Task 1: Navigate to the PHPTravels Website", () => {
    const homepage = new HomePage();

    homepage.visitHomePage();
    homepage.verifyHomePageVisibility();
    homepage.verifyHomePage();
  });
  it("Task 2: Search for Hotels", () => {
    const homepage = new HomePage();
    const hotelSearch = new HotelSearch();

    homepage.visitHomePage();
    homepage.verifyHomePageVisibility();
    homepage.verifyHomePage();

    hotelSearch.visitHotelModule();
    hotelSearch.verifyHotelModule();
    hotelSearch.searchHotelName();
    hotelSearch.verifySearchHotelName();
    cy.wait(1000);
    hotelSearch.selectHotel();

    hotelSearch.clearCheckInDate();
    hotelSearch.addCheckInDate();
    hotelSearch.selectCheckInDate();

    hotelSearch.clearCheckOutDate();
    hotelSearch.addCheckOutDate();
    hotelSearch.selectCheckOutDate();

    hotelSearch.clickSearchBtn();
    hotelSearch.catchExceptionModule();
    cy.wait(5000);
    hotelSearch.verifySearchHotelData();
  });
  it("Task 3: Select and book a hotel", () => {
    const homepage = new HomePage();
    const hotelSearch = new HotelSearch();
    const hotelBooking = new HotelBooking();

    homepage.visitHomePage();
    homepage.verifyHomePageVisibility();
    homepage.verifyHomePage();

    hotelSearch.visitHotelModule();
    hotelSearch.verifyHotelModule();
    hotelSearch.searchHotelName();
    hotelSearch.verifySearchHotelName();
    cy.wait(1000);
    hotelSearch.selectHotel();

    hotelSearch.clearCheckInDate();
    hotelSearch.addCheckInDate();
    hotelSearch.selectCheckInDate();

    hotelSearch.clearCheckOutDate();
    hotelSearch.addCheckOutDate();
    hotelSearch.selectCheckOutDate();

    hotelSearch.clickSearchBtn();
    hotelSearch.catchExceptionModule();
    cy.wait(5000);
    hotelSearch.verifySearchHotelData();

    hotelBooking.selectAHotel();
    hotelBooking.selectARoom();
    hotelBooking.verifyBookingInformationModule();
    cy.wait(5000);
    hotelBooking.bookingAddFirstName();
    hotelBooking.bookingAddLastName();
    hotelBooking.bookingAddEmail();
    hotelBooking.bookingAddPhone();
    hotelBooking.bookingAddAddress();
    hotelBooking.verifyTravellerInformationModule();
    hotelBooking.traveller1AddFirstName();
    hotelBooking.traveller1AddLastName();
    hotelBooking.traveller2AddFirstName();
    hotelBooking.traveller2AddLastName();
    hotelBooking.selectPaymentGateway();
    hotelBooking.selectAgreeBtn();
    hotelBooking.selectConfirmBookingBtn();
    cy.wait(7000);
    hotelBooking.verifyBookingSuccessModule();
  });
  it("Task 4: User Authentication", () => {
    const homepage = new HomePage();
    const userAuth = new UserAuthentication();

    homepage.visitHomePage();
    homepage.verifyHomePageVisibility();
    homepage.verifyHomePage();

    userAuth.selectUserModule();
    userAuth.selectLoginBtn();
    userAuth.loginAddUsername();
    userAuth.loginAddPassword();
    userAuth.selectSubmitBtn();
    //cy.wait(3000);
    //userAuth.verifyLoginSuccessModule();
  });
  it("Task 5: Handle Timeouts", () => {
    const timeout = new TimeoutHandle();

    timeout.visitHomePage();
    timeout.verifyHomePageVisibility();
    timeout.visitHotelModule();
    timeout.verifyHotelModule();
    timeout.verifyTimeoutGracefully();
  });
});
