import Page from "./page";

class NewAccountPage extends Page {
  get inputCustomerId() {
    return $('[name="cusid"]');
  }

  get selectAccountType() {
    return $('select[name="selaccount"]');
  }

  get inputInitialDeposit() {
    return $('input[name="inideposit"]');
  }

  get btnSubmit() {
    return $('input[type="submit"]');
  }

  addNewAccount(customerId, accountType, initialDeposit) {
    this.inputCustomerId.waitForDisplayed();
    this.inputCustomerId.setValue(customerId);
    this.selectAccountType.selectByAttribute("value", accountType);
    this.inputInitialDeposit.setValue(initialDeposit);
    this.btnSubmit.click();
  }
}

module.exports = new NewAccountPage();
