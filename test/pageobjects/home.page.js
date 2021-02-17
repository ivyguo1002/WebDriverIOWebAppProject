import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get welcomeMessage() {
    return $("marquee");
  }
  get linkLogOut() {
    return $("a=Log out");
  }
  get linkNewAccount() {
    return $('a[href="addAccount.php"]');
  }
  get iframeAd() {
    return $("#aswift_0");
  }

  closeAd() {
    this.linkLogOut.scrollIntoView();
    browser.switchToFrame(this.iframeAd);
    $("#cbb").click();
    browser.switchToFrame(null);
  }

  clickNewAccount() {
    this.linkLogOut.waitForDisplayed();
    this.linkNewAccount.click();
  }

  // Logout link is overlayed by iframe
  clickLogOut() {
    // Javascript click: works
    // browser.execute((ele) => { ele.click() }, this.linkLogOut);

    //Javascript: remove the whole ad block from DOM
    browser.execute((ele) => {
      ele.remove();
    }, $("ins.adsbygoogle"));
    this.linkLogOut.click();
  }
}

module.exports = new HomePage();
