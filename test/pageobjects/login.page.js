import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUserID() {
    return $('[name="uid"]');
  }
  get inputPassword() {
    return $('[name="password"]');
  }
  get btnLogin() {
    return $('[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(userid, password) {
    this.inputUserID.waitForDisplayed();
    this.inputUserID.setValue(userid);
    this.inputPassword.setValue(password);
    this.btnLogin.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}

module.exports = new LoginPage();
