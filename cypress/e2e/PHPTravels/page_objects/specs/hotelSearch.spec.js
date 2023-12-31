import locators from "../locators";

class HotelSearch {
  visitHotelModule() {
    locators.hotelSearch.visitHotelModule.click();
  }
  verifyHotelModule() {
    locators.hotelSearch.verifyHotelModule;
  }
  searchHotelName() {
    locators.hotelSearch.searchHotelName.type("Dubai");
  }
  verifySearchHotelName() {
    locators.hotelSearch.verifySearchHotelName;
  }
  selectHotel() {
    locators.hotelSearch.selectHotel.click();
  }
  clearCheckInDate() {
    locators.hotelSearch.clearCheckInDate.clear();
  }
  addCheckInDate() {
    const chkInDate = getCheckInCheckOutDate();
    const checkInDate = chkInDate[0];
    locators.hotelSearch.addCheckInDate.type(checkInDate);
  }
  selectCheckInDate() {
    locators.hotelSearch.selectCheckInDate.click();
  }
  clearCheckOutDate() {
    locators.hotelSearch.clearCheckOutDate.clear();
  }
  addCheckOutDate() {
    const chkOutDate = getCheckInCheckOutDate();
    const checkOutDate = chkOutDate[1];
    locators.hotelSearch.addCheckOutDate.type(checkOutDate);
  }
  selectCheckOutDate() {
    locators.hotelSearch.selectCheckOutDate.click();
  }
  clickSearchBtn() {
    locators.hotelSearch.clickSearchBtn.click();
  }
  verifySearchHotelData() {
    locators.hotelSearch.verifySearchHotelData;
  }
  catchExceptionModule() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
}
function getCheckInCheckOutDate() {
  var daysDifference = Math.floor(Math.random() * 4) + 2;
  var currentDate = new Date();

  var chkInDate = new Date(currentDate);
  chkInDate.setDate(currentDate.getDate() + daysDifference);
  chkInDate.setFullYear(2030);

  var chkOutDate = new Date(chkInDate);
  chkOutDate.setDate(
    chkInDate.getDate() + Math.floor(Math.random() * 4) + 2
  );

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();

    return dd + "-" + mm + "-" + yyyy;
  }

  var checkInDate = formatDate(chkInDate);
  var checkOutDate = formatDate(chkOutDate);

  return [checkInDate, checkOutDate];
}
export default HotelSearch;
