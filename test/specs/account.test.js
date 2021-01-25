const LoginPage = require("../pageobjects/login.page")
const loginData = require('../data/login.data');
const HomePage = require("../pageobjects/home.page");
const NewAccountPage = require("../pageobjects/newAccount.page");
const accountData = require('../data/account.data')
describe('Account features', () => {
    it('Should add new account successfully', () => {
        LoginPage.open();
        LoginPage.login(loginData.valid.username, loginData.valid.password);
        HomePage.clickNewAccount();
        NewAccountPage.addNewAccount(accountData.customerId,accountData.accountType,accountData.initialDeposit);
        // expect(browser.getUrl()).toContain('manager/insertAccount.php');
        expect(browser.getAlertText()).toContain('Customer does not exist!!');
        
    })
})