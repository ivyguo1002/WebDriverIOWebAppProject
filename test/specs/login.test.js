import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import data from "../data/login.data";

describe("guru99 banking project test cases", () => {
  beforeEach("", () => {
    LoginPage.open();
  });
  /**
     *  Steps:
     * 1)  Go to http://www.demo.guru99.com/V4/
        2) Enter valid UserId
        3) Enter valid Password
        4) Click Login
        Expected:
        Login Successfully
     */
  it.only("testcase1: should login with valid credentials", () => {
    LoginPage.login(data.valid.username, data.valid.password);
    expect(HomePage.welcomeMessage).toBeExisting();
    expect(HomePage.welcomeMessage).toHaveTextContaining(
      "Welcome To Manager's Page of Guru99 Bank"
    );
    expect(browser.getTitle()).toContain("Guru99 Bank Manager HomePage");
  });

  /**
     * Steps:
       Enter valid userid & invalid password 
       Expected: A pop-up should say 'usernmae or password is not valid'
     */
  it("testcase2: should receive error message with invaid credentials", () => {
    LoginPage.login(data.invalid.username, data.invalid.password);
    expect(browser.getAlertText()).toContain("User or Password is not valid");
  });

  it("testcase3: should log out successfully", () => {
    LoginPage.login("mngr303051", "utAjaje");
    // HomePage.closeAd();
    HomePage.clickLogOut();
    expect(browser.isAlertOpen()).toBeTruthy();
    expect(browser.getAlertText()).toContain(
      "You Have Succesfully Logged Out!!"
    );
    browser.acceptAlert();
    expect(browser.getTitle()).toEqual("Guru99 Bank Home Page");
  });
});
