import locators from "../locators";

class NavigateToHome {
  visitHomePage() {
    locators.homepage.visitHomePage;
  }
  verifyHomePageVisibility() {
    locators.homepage.verifyHomePageVisibility;
  }
  verifyHomePage() {
    locators.homepage.verifyHomePage;
  }
}
export default NavigateToHome;
