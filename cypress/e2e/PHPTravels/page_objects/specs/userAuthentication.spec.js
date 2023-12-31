import locators from "../locators";
import utility from "../../../../support/utility"

class userAuthentication {
  selectUserModule() {
    locators.userAuthentication.selectUserModule.click();
  }
  selectLoginBtn() {
    locators.userAuthentication.selectLoginBtn.click();
  }
  loginAddUsername() {
    locators.userAuthentication.loginAddUsername.type(utility.login.username);
  }
  loginAddPassword() {
    locators.userAuthentication.loginAddPassword.type(utility.login.password);
  }
  selectSubmitBtn() {
    locators.userAuthentication.selectSubmitBtn.click();
  }
  verifyLoginSuccessModule() {
    locators.userAuthentication.verifyLoginSuccessModule;
  }
}
export default userAuthentication;
