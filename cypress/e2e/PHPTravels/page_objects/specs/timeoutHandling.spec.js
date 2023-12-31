import locators from "../locators";

class timeoutHandling {
  visitHomePage() {
    locators.timeOutHandle.visitHomePage;
  }
  verifyHomePageVisibility() {
    locators.timeOutHandle.verifyHomePageVisibility;
  }
  visitHotelModule() {
    locators.timeOutHandle.visitHotelModule.click();
  }
  verifyHotelModule() {
    locators.timeOutHandle.verifyHotelModule;
  }
  verifyTimeoutGracefully() {
    locators.timeOutHandle.verifyTimeoutGracefully;
  }
}
export default timeoutHandling;
