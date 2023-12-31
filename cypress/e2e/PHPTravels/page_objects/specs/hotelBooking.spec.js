import locators from "../locators";
import utility from "../../../../support/utility";


class HotelBooking {
  selectAHotel() {
    locators.hotelBooking.selectAHotel.click();
  }
  selectARoom() {
    locators.hotelBooking.selectARoom.click();
  }
  verifyBookingInformationModule() {
    locators.hotelBooking.verifyBookingInformationModule;
  }
  bookingAddFirstName() {
    const userInfo = userRandomInformation();
    const firstName = userInfo[0];
    locators.hotelBooking.bookingAddFirstName.type(firstName);
  }
  bookingAddLastName() {
     const userInfo = userRandomInformation();
     const lastName = userInfo[1];
    locators.hotelBooking.bookingAddLastName.type(lastName);
  }
  bookingAddEmail() {
     const userInfo = userRandomInformation();
     const email = userInfo[2];
    locators.hotelBooking.bookingAddEmail.type(email);
  }
  bookingAddPhone() {
     const userInfo = userRandomInformation();
     const phone = userInfo[3];
    locators.hotelBooking.bookingAddPhone.type(phone);
  }
  bookingAddAddress() {
     const userInfo = userRandomInformation();
     const address = userInfo[4];
    locators.hotelBooking.bookingAddAddress.type(address);
  }
  verifyTravellerInformationModule() {
    locators.hotelBooking.verifyTravellerInformationModule;
  }
  traveller1AddFirstName() {
    const userInfo = userRandomInformation();
    const firstName = userInfo[0];
    locators.hotelBooking.traveller1AddFirstName.type(firstName);
  }
  traveller1AddLastName() {
     const userInfo = userRandomInformation();
     const lastName = userInfo[1];
    locators.hotelBooking.traveller1AddLastName.type(lastName);
  }
  traveller2AddFirstName() {
     const userInfo = userRandomInformation();
     const firstName = userInfo[0];
    locators.hotelBooking.traveller2AddFirstName.type(firstName);
  }
  traveller2AddLastName() {
    const userInfo = userRandomInformation();
    const lastName = userInfo[1];
    locators.hotelBooking.traveller2AddLastName.type(lastName);
  }
  selectPaymentGateway() {
    locators.hotelBooking.selectPaymentGateway.click();
  }
  selectAgreeBtn() {
    locators.hotelBooking.selectAgreeBtn.click();
  }
  selectConfirmBookingBtn() {
    locators.hotelBooking.selectConfirmBookingBtn.click();
  }
  verifyBookingSuccessModule() {
    locators.hotelBooking.verifyBookingSuccessModule;
  }
}

function userRandomInformation() {
  const random = () => Math.floor(Math.random() * 10);

  const firstNameIndex = Math.floor(
    Math.random() * utility.randomUserInformation.firstNameArr.length
  );
  const lastNameIndex = Math.floor(
    Math.random() * utility.randomUserInformation.lastNameArr.length
  );
  const fullAddressIndex = Math.floor(
    Math.random() * utility.randomUserInformation.userAddressesArr.length
  );
  const userPhoneIndex = Math.floor(
    Math.random() * utility.randomUserInformation.userPhoneNumbersArr.length
  );

  const firstName = utility.randomUserInformation.firstNameArr[firstNameIndex];
  const lastName = utility.randomUserInformation.lastNameArr[lastNameIndex];
  const address =
    utility.randomUserInformation.userAddressesArr[fullAddressIndex];
  const phoneNumber =
    utility.randomUserInformation.userPhoneNumbersArr[userPhoneIndex];
    
  const emailAddress = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.selise.test${
    random() * 200
    }@yopmail.com`;
  
  return [firstName, lastName, emailAddress, phoneNumber, address];
}
export default HotelBooking;
