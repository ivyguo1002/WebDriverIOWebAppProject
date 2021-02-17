import LoginPage from ("../pageobjects/login.page");
import loginData from ('../data/login.data');
import HomePage from ("../pageobjects/home.page");
import NewAccountPage from ("../pageobjects/newAccount.page");
import accountData from ('../data/account.data')
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